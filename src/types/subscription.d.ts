export interface Subscription {
    id: string;
    userId: string;
    planId: string;
    status: string;
    startDate: Date;
    nextBillingDate: Date;
    lastBillingDate: Date;
    totalCredits: number;
    usedCredits: number;
    isActive: boolean;
}