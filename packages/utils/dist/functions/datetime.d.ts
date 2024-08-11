declare const getDateTimeLocal: (timestamp?: Date) => string;
declare const parseDateTime: (str: Date | string) => Date | null;
declare const formatDate: (datetime: Date | string, options?: Intl.DateTimeFormatOptions) => string;
declare const formatDateTime: (datetime: Date | string) => string;
declare const getDaysDifference: (startDate: Date, endDate: Date) => number;
declare const getFirstAndLastDay: (day: number) => {
    firstDay: Date;
    lastDay: Date;
};
declare const getLastDayOfMonth: () => number;
declare const getAdjustedBillingCycleStart: (billingCycleStart: number) => number;
declare const getBillingStartDate: (billingCycleStart: number) => Date;

export { formatDate, formatDateTime, getAdjustedBillingCycleStart, getBillingStartDate, getDateTimeLocal, getDaysDifference, getFirstAndLastDay, getLastDayOfMonth, parseDateTime };
