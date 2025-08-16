import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-none",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, overline, title, subtitle, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "space-y-4",
          centered && "text-center",
          className
        )}
        {...props}
      >
        {overline && (
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {overline}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      sm: "section-sm",
      md: "py-16 lg:py-20",
      lg: "section",
    };

    return (
      <section
        ref={ref}
        className={cn(sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Container, SectionHeader, Section };