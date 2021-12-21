/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
