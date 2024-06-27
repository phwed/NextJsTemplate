import React from 'react';

/**
 * Props for the If component.
 */
interface IfProps {
    condition: boolean;
    children: React.ReactNode;
}

/**
 * Props for the Then component.
 */
interface TrueProps {
    children: React.ReactNode;
}

/**
 * Renders its children if the condition is true.
 * @param children - The children to render.
 */
export function Then({ children }: TrueProps) {
    return <>{children}</>;
}

/**
 * Props for the Else component.
 */
interface FalseProps {
    children: React.ReactNode;
}

/**
 * Renders its children if the condition is false.
 * @param children - The children to render.
 */
export function Else({ children }: FalseProps) {
    return <>{children}</>;
}

/**
 * Renders the children based on the condition.
 * @param condition - The condition to evaluate.
 * @param children - The children to render.
 */
const If = ({ condition, children }: IfProps) => {
    const childrenArray = React.Children.toArray(children);
    const trueChildren = childrenArray.filter((child) => {
        return (child as any).type === Then;
    });

    const falseChildren = childrenArray.filter((child) => {
        return (child as any).type === Else;
    });

    return condition ? (
        <>{trueChildren}</>
    ) : (
        <>{falseChildren}</>
    );
};

export default If;
