import { ReactNode } from "react";

export interface FeatureCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    image?: string;
    className?: string;
}

export interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    features: string[];
    highlight?: boolean;
}
