"use client";

import useLinks from "@/lib/swr/use-links";
import useLinksCount from "@/lib/swr/use-links-count";
import { LinkWithTagsProps, UserProps } from "@/lib/types";
import { CardList, MaxWidthWrapper, useRouterStuff } from "@dub/ui";
import { LoadingSpinner } from "@dub/ui/src/icons";
import { useSearchParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ArchivedLinksHint from "./archived-links-hint";
import { LinkCard } from "./link-card";
import LinkCardPlaceholder from "./link-card-placeholder";
import LinkNotFound from "./link-not-found";
import { LinksDisplayContext } from "./links-display-provider";
import NoLinksPlaceholder from "./no-links-placeholder";
//👇🏻 additions/changes
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core"
import { useAddEditLinkModal } from "@/ui/modals/add-edit-link-modal";
import { useDeleteLinkModal } from "@/ui/modals/delete-link-modal";

export const LinksListContext = createContext<{
  openMenuLinkId: string | null;
  setOpenMenuLinkId: Dispatch<SetStateAction<string | null>>;
}>({
  openMenuLinkId: null,
  setOpenMenuLinkId: () => {},
});


export type ResponseLink = LinkWithTagsProps & {
  user: UserProps;
};

export default function LinksContainer({
  AddEditLinkButton,
}: {
  AddEditLinkButton: () => JSX.Element;
}) {
  const { viewMode, sort, showArchived } = useContext(LinksDisplayContext);

  const { links, isValidating } = useLinks({ sort, showArchived });
  const [updatedLinks, setUpdatedLinks] = useState<ResponseLink[]>(links || []);
  const [selectedLink, setSelectedLink] = useState<ResponseLink>(links?.[0]!);

   const { setShowDeleteLinkModal, DeleteLinkModal} = useDeleteLinkModal({
    props: selectedLink!,
   });

  useEffect(() => {
    setUpdatedLinks(links || []);
  }, [links]);


  const { data: count } = useLinksCount({ showArchived });

  useCopilotReadable({
    description:
      "This is the list of links you have saved. You can click on a link to view it, or use the search bar to find a specific link.",
    value: updatedLinks,
  });

   useCopilotAction({
    name: "deleteShortLink",
    description: "delete a link from the database via its ID",
    parameters: [
      {
        name: "id",
        type: "string",
        description: "The ID of a short link",
        required: true,
      },
    ],
    render: "Deleting link...",
    handler: async ({ id }) => {
      if (!id) return;
      const link = updatedLinks?.find((link) => link.id === id) 
      if (!link) return;
      setSelectedLink(link)
      setShowDeleteLinkModal(true);
    },
  });

  return (
    <MaxWidthWrapper className="grid gap-y-2">
      <LinksList
        AddEditLinkButton={AddEditLinkButton}
        links={links}
        count={count}
        loading={isValidating}
        compact={viewMode === "rows"}
      />
      <DeleteLinkModal />
    </MaxWidthWrapper>
  );
}



function LinksList({
  AddEditLinkButton,
  links,
  count,
  loading,
  compact,
}: {
  AddEditLinkButton: () => JSX.Element;
  links?: ResponseLink[];
  count?: number;
  loading?: boolean;
    compact: boolean;
   
}) {
  const { queryParams } = useRouterStuff();
  const searchParams = useSearchParams();
  const page = (parseInt(searchParams?.get("page") || "1") || 1) - 1;

  const [openMenuLinkId, setOpenMenuLinkId] = useState<string | null>(null);

  const isFiltered = [
    "domain",
    "tagId",
    "userId",
    "search",
    "showArchived",
  ].some((param) => searchParams.has(param));

  return (
    <>
      {!links || links.length ? (
        <LinksListContext.Provider
          value={{ openMenuLinkId, setOpenMenuLinkId }}
        >
          {/* Cards */}
          <CardList variant={compact ? "compact" : "loose"} loading={loading}>
            {links?.length
              ? // Link cards
              links.map((link) => <LinkCard key={link.id} link={link} />)
              : // Loading placeholder cards
                Array.from({ length: 12 }).map((_, idx) => (
                  <CardList.Card
                    key={idx}
                    outerClassName="pointer-events-none"
                    innerClassName="flex items-center gap-4"
                  >
                    <LinkCardPlaceholder />
                  </CardList.Card>
                ))}
          </CardList>
        </LinksListContext.Provider>
      ) : isFiltered ? (
        <LinkNotFound />
      ) : (
        <NoLinksPlaceholder AddEditLinkButton={AddEditLinkButton} />
      )}

      {/* Pagination */}
      {links && (
        <CardList.Pagination
          page={page}
          onPageChange={(p) => {
            const newPage = p(page);
            queryParams(
              newPage === 0
                ? { del: "page" }
                : {
                    set: {
                      page: (newPage + 1).toString(),
                    },
                  },
            );
          }}
          totalCount={count ?? links?.length ?? 0}
          resourceName={(plural) => `${plural ? "links" : "link"}`}
        >
          {loading ? (
            <LoadingSpinner className="size-3.5" />
          ) : (
            <div className="hidden sm:block">
              <ArchivedLinksHint />
            </div>
          )}
        </CardList.Pagination>
      )}
    </>
  );
}
