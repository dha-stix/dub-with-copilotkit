"use client";

import useDomains from "@/lib/swr/use-domains";
import useWorkspace from "@/lib/swr/use-workspace";
import { LinkWithTagsProps } from "@/lib/types";
import { AlertCircleFill, Lock, Random, X } from "@/ui/shared/icons";
import { ProBadgeTooltip } from "@/ui/shared/pro-badge-tooltip";
import { UpgradeRequiredToast } from "@/ui/shared/upgrade-required-toast";
import {
  Button,
  ButtonTooltip,
  LinkLogo,
  LinkedIn,
  LoadingCircle,
  Modal,
  SimpleTooltipContent,
  Tooltip,
  TooltipContent,
  Twitter,
  useMediaQuery,
  useRouterStuff,
} from "@dub/ui";
import { ArrowTurnRight2 } from "@dub/ui/src/icons";
import { InfoTooltip } from "@dub/ui/src/tooltip";
import {
  DEFAULT_LINK_PROPS,
  DUB_DOMAINS,
  cn,
  deepEqual,
  getApexDomain,
  getUrlWithoutUTMParams,
  isValidUrl,
  linkConstructor,
  nanoid,
  punycode,
  truncate,
} from "@dub/utils";
import { TriangleAlert } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import {
  Dispatch,
  FC,
  SetStateAction,
  UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import { mutate } from "swr";
import { useDebounce } from "use-debounce";
import AndroidSection from "./android-section";
import CloakingSection from "./cloaking-section";
import CommentsSection from "./comments-section";
import ConversionSection from "./conversion-section";
import DoIndexSection from "./doindex-section";
import ExpirationSection from "./expiration-section";
import GeoSection from "./geo-section";
import IOSSection from "./ios-section";
import OGSection from "./og-section";
import PasswordSection from "./password-section";
import Preview from "./preview";
import TagsSection from "./tags-section";
import UTMSection from "./utm-section";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

type AddEditLinkModalProps = {
  showAddEditLinkModal: boolean;
  setShowAddEditLinkModal: Dispatch<SetStateAction<boolean>>;
  props?: LinkWithTagsProps;
  generatingRandomKey: boolean;
  setGeneratingRandomKey: Dispatch<SetStateAction<boolean>>;
  keyError: string | null;
  setKeyError: Dispatch<SetStateAction<string | null>>;
  duplicateProps?: LinkWithTagsProps;
  homepageDemo?: boolean;
};

const AddEditLinkModal: FC<AddEditLinkModalProps> = ({
  showAddEditLinkModal,
  setShowAddEditLinkModal,
  props,
  generatingRandomKey,
  keyError,
  setGeneratingRandomKey,
  setKeyError,
  duplicateProps,
  homepageDemo,
}) => {
  const params = useParams() as { slug?: string };
  const { slug } = params;
  const { id: workspaceId, nextPlan, flags } = useWorkspace();
  const [urlError, setUrlError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const { allActiveDomains, primaryDomain, allDomains, loading } = useDomains();

  const domains = useMemo(() => {
    // edge case where the link's current domain has been archived
    if (
      props?.domain &&
      !allActiveDomains.find((domain) => domain.slug === props.domain)
    ) {
      const currentDomain = allDomains.find(
        (domain) => domain.slug === props.domain,
      );
      if (currentDomain) {
        return [...allActiveDomains, currentDomain].filter(Boolean);
      } else {
        return allActiveDomains;
      }
    }
    return allActiveDomains;
  }, [allDomains, allActiveDomains, props]);

  const [data, setData] = useState<LinkWithTagsProps>(
    props || duplicateProps || DEFAULT_LINK_PROPS,
  );

  const generateRandomKey = async () => {
    setKeyError(null);
    setGeneratingRandomKey(true);
    const res = await fetch(
      `/api/links/random?domain=${primaryDomain}&workspaceId=${workspaceId}`,
    );
    const key = await res.json();
    setData((prev) => ({ ...prev, key }));
    setGeneratingRandomKey(false);
  };

  const runKeyChecks = async (value: string) => {
    const res = await fetch(
      `/api/links/verify?domain=${data.domain}&key=${value}&workspaceId=${workspaceId}`,
    );
    const { error } = await res.json();
    if (error) {
      setKeyError(error.message);
    } else {
      setKeyError(null);
    }
  };

  const [generatingMetatags, setGeneratingMetatags] = useState(
    props ? true : false,
  );

  const [debouncedUrl] = useDebounce(getUrlWithoutUTMParams(data.url), 500);

  useEffect(() => {
    // if there's a password, no need to generate metatags
    if (data.password) {
      setGeneratingMetatags(false);
      setData((prev) => ({
        ...prev,
        title: "Password Required",
        description:
          "This link is password protected. Please enter the password to view it.",
        image: "/_static/password-protected.png",
      }));
      return;
    }
    /**
     * Only generate metatags if:
     * - modal is open
     * - custom OG proxy is not enabled
     * - url is not empty
     **/
    if (showAddEditLinkModal && !data.proxy && debouncedUrl.length > 0) {
      setData((prev) => ({
        ...prev,
        title: null,
        description: null,
        image: null,
      }));
      try {
        // if url is valid, continue to generate metatags, else return null
        new URL(debouncedUrl);
        setGeneratingMetatags(true);
        fetch(`/api/metatags?url=${debouncedUrl}`).then(async (res) => {
          if (res.status === 200) {
            const results = await res.json();
            setData((prev) => ({
              ...prev,
              ...{
                title: truncate(results.title, 120),
                description: truncate(results.description, 240),
                image: results.image,
              },
            }));
          }
          // set timeout to prevent flickering
          setTimeout(() => setGeneratingMetatags(false), 200);
        });
      } catch (_) {}
    } else {
      setGeneratingMetatags(false);
    }
  }, [debouncedUrl, data.password, showAddEditLinkModal]);

  const endpoint = useMemo(() => {
    if (props?.id) {
      return {
        method: "PATCH",
        url: `/api/links/${props.id}?workspaceId=${workspaceId}`,
      };
    } else {
      return {
        method: "POST",
        url: `/api/links?workspaceId=${workspaceId}`,
      };
    }
  }, [props, slug, data.domain, workspaceId]);

  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (Math.abs(scrollHeight - scrollTop - clientHeight) < 5) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  }, []);

  const saveDisabled = useMemo(() => {
    /* 
      Disable save if:
      - modal is not open
      - saving is in progress
      - key is invalid
      - url is invalid
      - for an existing link, there's no changes
    */
    if (
      !showAddEditLinkModal ||
      saving ||
      keyError ||
      urlError ||
      (props &&
        Object.entries(props).every(([key, value]) => {
          // If the key is "title" or "description" and proxy is not enabled, return true (skip the check)
          if (
            (key === "title" || key === "description" || key === "image") &&
            !data.proxy
          ) {
            return true;
          } else if (key === "geo") {
            const equalGeo = deepEqual(props.geo as object, data.geo as object);
            return equalGeo;
          }
          // Otherwise, check for discrepancy in the current key-value pair
          // return data[key] === value;
        }))
    ) {
      return true;
    } else {
      return false;
    }
  }, [showAddEditLinkModal, saving, keyError, urlError, props, data]);

  const randomIdx = Math.floor(Math.random() * 100);

  const [lockKey, setLockKey] = useState(true);

  const keyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data.key?.endsWith("-copy")) {
      keyRef.current?.select();
    }
  }, []);

  const { isMobile } = useMediaQuery();

  const searchParams = useSearchParams();
  const { queryParams } = useRouterStuff();

  const shortLink = useMemo(() => {
    return linkConstructor({
      key: data.key,
      domain: data.domain,
      pretty: true,
    });
  }, [data.key, data.domain]);

  const randomLinkedInNonce = useMemo(() => nanoid(8), []);

  const updateFormData = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // @ts-ignore – exclude extra attributes from `data` object before sending to API
    const { user, tags, tagId, ...rest } = data;
    const bodyData = {
      ...rest,
      // Map tags to tagIds
      tagIds: tags.map(({ id }) => id),
    };
    fetch(endpoint.url, {
      method: endpoint.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }).then(async (res) => {
      if (res.status === 200) {
        await mutate(
          (key) => typeof key === "string" && key.startsWith("/api/links"),
          undefined,
          { revalidate: true },
        );
        const data = await res.json();
        // copy shortlink to clipboard when adding a new link

        try {
          await navigator.clipboard.writeText(data.shortLink);
          toast.success("Copied shortlink to clipboard!");
        } catch (e) {
          console.error(
            "Failed to automatically copy shortlink to clipboard.",
            e,
          );
          toast.success("Successfully created link!");
        }

        setShowAddEditLinkModal(false);
      } else {
        const { error } = await res.json();
        if (error) {
          if (error.message.includes("Upgrade to")) {
            toast.custom(() => (
              <UpgradeRequiredToast
                title={`You've discovered a ${nextPlan.name} feature!`}
                message={error.message}
              />
            ));
          } else {
            toast.error(error.message);
          }
          const message = error.message.toLowerCase();

          if (message.includes("key")) {
            setKeyError(error.message);
          } else if (message.includes("url")) {
            setUrlError(error.message);
          }
        }
      }
      setSaving(false);
    });
  };

  return (
    <Modal
      showModal={showAddEditLinkModal}
      setShowModal={setShowAddEditLinkModal}
      className="max-w-screen-lg"
      preventDefaultClose={homepageDemo ? false : true}
      onClose={() => {
        if (searchParams.has("newLink")) {
          queryParams({
            del: ["newLink", "newLinkDomain"],
          });
        }
      }}
    >
      <div className="scrollbar-hide grid max-h-[95dvh] w-full divide-x divide-gray-100 overflow-auto md:grid-cols-2 md:overflow-hidden">
        {!homepageDemo && (
          <button
            onClick={() => {
              setShowAddEditLinkModal(false);
              if (searchParams.has("newLink")) {
                queryParams({
                  del: ["newLink"],
                });
              }
            }}
            className="group absolute right-0 top-0 z-20 m-3 hidden rounded-full p-2 text-gray-500 transition-all duration-75 hover:bg-gray-100 focus:outline-none active:bg-gray-200 md:block"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div
          className="scrollbar-hide rounded-l-2xl md:max-h-[95vh] md:overflow-auto"
          onScroll={handleScroll}
        >
          <div className="sticky top-0 z-20 flex h-14 items-center justify-center gap-4 space-y-3 border-b border-gray-200 bg-white px-4 transition-all sm:h-24 md:px-16">
            <LinkLogo apexDomain={getApexDomain(debouncedUrl)} />
            <h3 className="!mt-0 max-w-sm truncate text-lg font-medium">
              Create Link
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 bg-gray-50 pt-8">
            <div className="grid gap-6 px-4 md:px-16">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor={`url-${randomIdx}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Destination URL
                    </label>
                    {data.key === "_root" ? (
                      <ProBadgeTooltip
                        content={
                          <SimpleTooltipContent
                            title="The URL your users will get redirected to when they visit your root domain link."
                            cta="Learn more."
                            href="https://dub.co/help/article/how-to-redirect-root-domain"
                          />
                        }
                      />
                    ) : (
                      <InfoTooltip
                        content={
                          <SimpleTooltipContent
                            title="The URL your users will get redirected to when they visit your short link."
                            cta="Learn more."
                            href="https://dub.co/help/article/how-to-create-link"
                          />
                        }
                      />
                    )}
                  </div>
                  <div className="animate-text-appear text-xs font-normal text-gray-500">
                    press <strong>Enter</strong> ↵ to submit
                  </div>
                </div>
                {/** --- URL */}
                <div className="relative mt-2 flex rounded-md shadow-sm">
                  <input
                    name="url"
                    id={`url-${randomIdx}`}
                    required={data.key !== "_root"}
                    value={data.url}
                    autoFocus={!data.key && !isMobile}
                    onChange={(e) => {
                      setUrlError(null);
                      updateFormData("url", e.target.value);
                    }}
                    className={`${
                      urlError
                        ? "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500"
                    } block w-full rounded-md focus:outline-none sm:text-sm`}
                    aria-invalid="true"
                  />
                  {urlError && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <AlertCircleFill
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                {urlError && (
                  <p className="mt-2 text-sm text-red-600" id="key-error">
                    {urlError}
                  </p>
                )}
              </div>

              {data.key !== "_root" && (
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor={`key-${randomIdx}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Short Link
                    </label>
                    {props && lockKey ? (
                      <button
                        className="flex h-6 items-center space-x-2 text-sm text-gray-500 transition-all duration-75 hover:text-black active:scale-95"
                        type="button"
                        onClick={() => {
                          window.confirm(
                            "Editing an existing short link could potentially break existing links. Are you sure you want to continue?",
                          ) && setLockKey(false);
                        }}
                      >
                        <Lock className="h-3 w-3" />
                      </button>
                    ) : (
                      <div className="flex items-center">
                        <ButtonTooltip
                          tabIndex={-1}
                          tooltipContent="Generate a random key"
                          onClick={generateRandomKey}
                          disabled={generatingRandomKey}
                          className="flex h-6 w-6 items-center justify-center rounded-md text-gray-500 transition-colors duration-75 hover:bg-gray-100 active:bg-gray-200 disabled:cursor-not-allowed"
                        >
                          {generatingRandomKey ? (
                            <LoadingCircle />
                          ) : (
                            <Random className="h-3 w-3" />
                          )}
                        </ButtonTooltip>
                      </div>
                    )}
                  </div>
                  <div className="relative mt-1 flex rounded-md shadow-sm">
                    {/** --- Domain */}
                    <div>
                      <select
                        tabIndex={-1}
                        disabled={props && lockKey}
                        value={data.domain}
                        onChange={(e) => {
                          setKeyError(null);
                          updateFormData("domain", e.target.value);
                        }}
                        className={cn(
                          "max-w-[12rem] rounded-l-md border border-r-0 border-gray-300 bg-gray-50 pl-4 pr-8 text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0 sm:text-sm",
                          props && lockKey && "cursor-not-allowed",
                          loading && "w-[6rem] text-transparent",
                        )}
                      >
                        {domains?.map(({ slug }) => (
                          <option key={slug} value={slug}>
                            {punycode(slug)}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/** --- Key */}
                    <input
                      ref={keyRef}
                      type="text"
                      name="key"
                      id={`key-${randomIdx}`}
                      // allow letters, numbers, '-', '/' and emojis
                      pattern="[\p{L}\p{N}\p{Pd}\/\p{Emoji}]+"
                      onInvalid={(e) => {
                        e.currentTarget.setCustomValidity(
                          "Only letters, numbers, '-', '/', and emojis are allowed.",
                        );
                      }}
                      onBlur={(e) => {
                        // if the key is changed, check if key exists
                        if (e.target.value && props?.key !== e.target.value) {
                          runKeyChecks(e.target.value);
                        } else if (
                          data.domain &&
                          workspaceId &&
                          data.url.length > 0 &&
                          !saving
                        ) {
                          generateRandomKey();
                        }
                      }}
                      disabled={props && lockKey}
                      autoComplete="off"
                      className={cn(
                        "block w-full rounded-r-md border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm",
                        {
                          "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500":
                            keyError,
                          "border-amber-300 pr-10 text-amber-900 placeholder-amber-300 focus:border-amber-500 focus:ring-amber-500":
                            shortLink.length > 25,
                          "cursor-not-allowed border border-gray-300 bg-gray-100 text-gray-500":
                            props && lockKey,
                        },
                      )}
                      placeholder="(optional)"
                      value={punycode(data.key)}
                      onChange={(e) => {
                        setKeyError(null);
                        e.currentTarget.setCustomValidity("");
                        updateFormData("key", e.target.value.replace(" ", "-"));
                      }}
                      aria-invalid="true"
                      aria-describedby="key-error"
                    />
                    {(keyError || shortLink.length > 25) && (
                      <Tooltip
                        content={
                          keyError || (
                            <div className="flex max-w-xs items-start space-x-2 bg-white p-4">
                              <TriangleAlert className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                              <div>
                                <p className="text-sm text-gray-700">
                                  Short links longer than 25 characters will
                                  show up differently on some platforms.
                                </p>
                                <div className="mt-2 flex items-center space-x-2">
                                  <LinkedIn className="h-4 w-4" />
                                  <p className="cursor-pointer text-sm font-semibold text-[#4783cf] hover:underline">
                                    {linkConstructor({
                                      domain: "lnkd.in",
                                      key: randomLinkedInNonce,
                                      pretty: true,
                                    })}
                                  </p>
                                </div>
                                {shortLink.length > 25 && (
                                  <div className="mt-1 flex items-center space-x-2">
                                    <Twitter className="h-4 w-4" />
                                    <p className="cursor-pointer text-sm text-[#34a2f1] hover:underline">
                                      {truncate(shortLink, 25)}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        }
                      >
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          {keyError ? (
                            <AlertCircleFill
                              className="h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          ) : shortLink.length > 25 ? (
                            <AlertCircleFill className="h-5 w-5 text-amber-500" />
                          ) : null}
                        </div>
                      </Tooltip>
                    )}
                  </div>
                  {keyError ? (
                    keyError.includes("Upgrade to") ? (
                      <p className="mt-2 text-sm text-red-600" id="key-error">
                        {keyError.split(`Upgrade to ${nextPlan.name}`)[0]}
                        <span
                          className="cursor-pointer underline"
                          onClick={() =>
                            queryParams({
                              set: { upgrade: nextPlan.name.toLowerCase() },
                            })
                          }
                        >
                          Upgrade to {nextPlan.name}
                        </span>
                        {keyError.split(`Upgrade to ${nextPlan.name}`)[1]}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-red-600" id="key-error">
                        {keyError}
                      </p>
                    )
                  ) : (
                    <DefaultDomainPrompt data={data} setData={setData} />
                  )}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="relative pb-3 pt-5">
              <div
                className="absolute inset-0 flex items-center px-4 md:px-16"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="-translate-y-1 bg-gray-50 px-2 text-sm text-gray-500">
                  Optional
                </span>
              </div>
            </div>

            <div className="grid gap-5 px-4 md:px-16">
              <TagsSection {...{ props, data, setData }} />
              {flags?.conversions && (
                <ConversionSection {...{ data, setData }} />
              )}
              <OGSection
                {...{ props, data, setData }}
                generatingMetatags={generatingMetatags}
              />
              <UTMSection {...{ props, data, setData }} />
              <CloakingSection {...{ data, setData }} />
              <PasswordSection {...{ props, data, setData }} />
              <ExpirationSection {...{ props, data, setData }} />
              <IOSSection {...{ props, data, setData }} />
              <AndroidSection {...{ props, data, setData }} />
              <GeoSection {...{ props, data, setData }} />
              <DoIndexSection {...{ data, setData }} />
              <CommentsSection {...{ props, data, setData }} />
            </div>

            {/** Save button */}
            <div
              className={`${
                atBottom ? "" : "md:shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.1)]"
              } z-10 bg-gray-50 px-4 py-8 transition-all md:sticky md:bottom-0 md:px-16`}
            >
              {homepageDemo ? (
                <Button
                  disabledTooltip="This is a demo link. You can't edit it."
                  text="Save changes"
                />
              ) : (
                <Button
                  disabled={saveDisabled}
                  loading={saving}
                  text="Create link"
                />
              )}
            </div>
          </form>
        </div>
        <div className="scrollbar-hide rounded-r-2xl md:max-h-[95vh] md:overflow-auto">
          <Preview
            data={data}
            setData={setData}
            generatingMetatags={generatingMetatags}
          />
        </div>
      </div>
    </Modal>
  );
};

function DefaultDomainPrompt({
  data,
  setData,
}: {
  data: LinkWithTagsProps;
  setData: Dispatch<SetStateAction<LinkWithTagsProps>>;
}) {
  const apexDomain = getApexDomain(data.url);
  const hostnameFor = DUB_DOMAINS.find((domain) =>
    domain?.allowedHostnames?.includes(apexDomain),
  );
  const domain = hostnameFor?.slug;

  if (!domain || data.domain === domain) return null;

  return (
    <button
      className="flex items-center gap-1 p-2 text-xs text-gray-500 transition-all duration-75 hover:text-gray-700 active:scale-[0.98]"
      onClick={() => setData({ ...data, domain })}
      type="button"
    >
      <ArrowTurnRight2 className="size-3.5" />
      <p>
        Use <strong className="font-semibold">{domain}</strong> domain instead?
      </p>
    </button>
  );
}

function AddEditLinkButton({
  setShowAddEditLinkModal,
}: {
  setShowAddEditLinkModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { nextPlan, exceededLinks } = useWorkspace();
  const { queryParams } = useRouterStuff();

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const existingModalBackdrop = document.getElementById("modal-backdrop");
    // only open modal with keyboard shortcut if:
    // - c is pressed
    // - user is not pressing cmd/ctrl + c
    // - user is not typing in an input or textarea
    // - there is no existing modal backdrop (i.e. no other modal is open)
    // - workspace has not exceeded links limit
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      target.tagName !== "INPUT" &&
      target.tagName !== "TEXTAREA" &&
      !existingModalBackdrop &&
      !exceededLinks
    ) {
      e.preventDefault(); // or else it'll show up in the input field since that's getting auto-selected
      setShowAddEditLinkModal(true);
    }
  }, []);

  // listen to paste event, and if it's a URL, open the modal and input the URL
  const handlePaste = (e: ClipboardEvent) => {
    const pastedContent = e.clipboardData?.getData("text");
    const target = e.target as HTMLElement;
    const existingModalBackdrop = document.getElementById("modal-backdrop");

    // make sure:
    // - pasted content is a valid URL
    // - user is not typing in an input or textarea
    // - there is no existing modal backdrop (i.e. no other modal is open)
    // - workspace has not exceeded links limit
    if (
      pastedContent &&
      isValidUrl(pastedContent) &&
      target.tagName !== "INPUT" &&
      target.tagName !== "TEXTAREA" &&
      !existingModalBackdrop &&
      !exceededLinks
    ) {
      setShowAddEditLinkModal(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("keydown", onKeyDown),
        document.removeEventListener("paste", handlePaste);
    };
  }, [onKeyDown]);

  return (
    <Button
      text="Create link"
      shortcut="C"
      disabledTooltip={
        exceededLinks ? (
          <TooltipContent
            title="Your workspace has exceeded its monthly links limit. We're still collecting data on your existing links, but you need to upgrade to add more links."
            cta={`Upgrade to ${nextPlan.name}`}
            onClick={() => {
              queryParams({
                set: {
                  upgrade: nextPlan.name.toLowerCase(),
                },
              });
            }}
          />
        ) : undefined
      }
      onClick={() => setShowAddEditLinkModal(true)}
    />
  );
}

export function useAddEditLinkModal({
  props,
  duplicateProps,
  homepageDemo,
}: {
  props?: LinkWithTagsProps;
  duplicateProps?: LinkWithTagsProps;
  homepageDemo?: boolean;
} = {}) {
  const [showAddEditLinkModal, setShowAddEditLinkModal] = useState(false);
  const [updatedProps, setUpdatedProps] = useState(props || DEFAULT_LINK_PROPS);
  const [keyError, setKeyError] = useState<string | null>(null);
  const { primaryDomain, loading } = useDomains();

  const [generatingRandomKey, setGeneratingRandomKey] = useState(false);
  const { id: workspaceId } = useWorkspace();

  const getKey = async (domain: string) => {
    setKeyError(null);
    setGeneratingRandomKey(true);
    const res = await fetch(
      `/api/links/random?domain=${domain}&workspaceId=${workspaceId}`,
    );
    const key = await res.json();
    return key;
  };

  useCopilotReadable({
    description:
      "Create a short link by entering the destination URL and a custom key. You can also generate a random key or use AI to generate a key. Other optional settings include adding tags, UTM parameters, and more.",
    value: updatedProps,
  });

  useCopilotAction({
    name: "createNewLink",
    description: "Create a new link",
    parameters: [
      {
        name: "url",
        type: "string",
        description: "The destination URL for the short link",
        required: true,
      },
    ],
    render: "Loading...",
    handler: async ({ url }) => {
      const key = await getKey(primaryDomain);
      console.log("Updating new data....");
      setUpdatedProps((prev) => ({
        ...prev,
        url,
        domain: primaryDomain,
        key,
        id: "",
      }));
      setGeneratingRandomKey(false);
      setShowAddEditLinkModal(true);
    },
  });

  const AddEditLinkModalCallback = useCallback(() => {
    return (
      <AddEditLinkModal
        showAddEditLinkModal={showAddEditLinkModal}
        setShowAddEditLinkModal={setShowAddEditLinkModal}
        props={updatedProps}
        keyError={keyError}
        setKeyError={setKeyError}
        generatingRandomKey={generatingRandomKey}
        setGeneratingRandomKey={setGeneratingRandomKey}
        duplicateProps={duplicateProps}
        homepageDemo={homepageDemo}
      />
    );
  }, [showAddEditLinkModal, setShowAddEditLinkModal]);

  const AddEditLinkButtonCallback = useCallback(() => {
    return (
      <AddEditLinkButton setShowAddEditLinkModal={setShowAddEditLinkModal} />
    );
  }, [setShowAddEditLinkModal]);

  return useMemo(
    () => ({
      showAddEditLinkModal,
      setShowAddEditLinkModal,
      AddEditLinkModal: AddEditLinkModalCallback,
      AddEditLinkButton: AddEditLinkButtonCallback,
    }),
    [
      showAddEditLinkModal,
      setShowAddEditLinkModal,
      AddEditLinkModalCallback,
      AddEditLinkButtonCallback,
    ],
  );
}