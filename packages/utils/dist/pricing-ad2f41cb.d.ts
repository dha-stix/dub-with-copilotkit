declare const PLANS: ({
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
})[];
declare const FREE_PLAN: {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const PRO_PLAN: {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const BUSINESS_PLAN: {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const ENTERPRISE_PLAN: {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const PUBLIC_PLANS: ({
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
})[];
declare const SELF_SERVE_PAID_PLANS: ({
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
})[];
declare const FREE_WORKSPACES_LIMIT = 2;
declare const getPlanFromPriceId: (priceId: string) => {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
} | null;
declare const getPlanDetails: (plan: string) => {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const getCurrentPlan: (plan: string) => {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};
declare const getNextPlan: (plan?: string | null) => {
    name: string;
    tagline: string;
    price: {
        monthly: number;
        yearly: number;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    })[];
    link?: undefined;
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: number;
        yearly: number;
        ids: string[];
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        shortText: string;
        href: string;
        color: string;
    };
    featureTitle: string;
    features: ({
        text: string;
        footnote?: undefined;
    } | {
        text: string;
        footnote: {
            title: string;
            cta: string;
            href: string;
        };
    } | {
        text: string;
        footnote: string;
    })[];
} | {
    name: string;
    tagline: string;
    link: string;
    price: {
        monthly: null;
        yearly: null;
        ids?: undefined;
    };
    limits: {
        links: number;
        clicks: number;
        domains: number;
        tags: number;
        users: number;
        ai: number;
        api: number;
    };
    colors: {
        bg: string;
        text: string;
    };
    cta: {
        text: string;
        href: string;
        color: string;
        shortText?: undefined;
    };
    featureTitle: string;
    features: {
        text: string;
    }[];
};

export { BUSINESS_PLAN as B, ENTERPRISE_PLAN as E, FREE_PLAN as F, PLANS as P, SELF_SERVE_PAID_PLANS as S, PRO_PLAN as a, PUBLIC_PLANS as b, FREE_WORKSPACES_LIMIT as c, getPlanDetails as d, getCurrentPlan as e, getNextPlan as f, getPlanFromPriceId as g };
