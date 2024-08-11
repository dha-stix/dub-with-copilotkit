declare const FRAMER_MOTION_LIST_ITEM_VARIANTS: {
    hidden: {
        scale: number;
        opacity: number;
    };
    show: {
        scale: number;
        opacity: number;
        transition: {
            type: string;
        };
    };
};
declare const STAGGER_CHILD_VARIANTS: {
    hidden: {
        opacity: number;
        y: number;
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            type: string;
        };
    };
};
declare const SWIPE_REVEAL_ANIMATION_SETTINGS: {
    initial: {
        height: number;
    };
    animate: {
        height: string;
    };
    exit: {
        height: number;
    };
    transition: {
        duration: number;
        ease: string;
    };
};
declare const FADE_IN_ANIMATION_SETTINGS: {
    initial: {
        opacity: number;
    };
    animate: {
        opacity: number;
    };
    exit: {
        opacity: number;
    };
    transition: {
        duration: number;
    };
};

export { FADE_IN_ANIMATION_SETTINGS, FRAMER_MOTION_LIST_ITEM_VARIANTS, STAGGER_CHILD_VARIANTS, SWIPE_REVEAL_ANIMATION_SETTINGS };
