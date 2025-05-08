import React from "react";
import "./UnrtButton.css";
export interface UnrtButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}
export declare const UnrtButton: React.FC<UnrtButtonProps>;
//# sourceMappingURL=UnrtButton.d.ts.map