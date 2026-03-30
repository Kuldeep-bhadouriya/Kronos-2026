"use client";

import React, {
  type CSSProperties,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type BlurPosition = "top" | "bottom" | "left" | "right";
type BlurCurve = "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
type BlurTarget = "parent" | "page";
type BlurPreset =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "subtle"
  | "intense"
  | "smooth"
  | "sharp"
  | "header"
  | "footer"
  | "sidebar"
  | "page-header"
  | "page-footer";

export type GradualBlurProps = PropsWithChildren<{
  position?: BlurPosition;
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | "scroll";
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: BlurCurve;
  responsive?: boolean;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
  preset?: BlurPreset;
  gpuOptimized?: boolean;
  hoverIntensity?: number;
  target?: BlurTarget;
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
}>;

const DEFAULT_CONFIG: Required<
  Pick<
    GradualBlurProps,
    | "position"
    | "strength"
    | "height"
    | "divCount"
    | "exponential"
    | "zIndex"
    | "animated"
    | "duration"
    | "easing"
    | "opacity"
    | "curve"
    | "responsive"
    | "target"
    | "className"
    | "style"
  >
> = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
  className: "",
  style: {},
};

const PRESETS: Record<BlurPreset, Partial<GradualBlurProps>> = {
  top: { position: "top", height: "6rem" },
  bottom: { position: "bottom", height: "6rem" },
  left: { position: "left", width: "6rem" },
  right: { position: "right", width: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
  smooth: { height: "8rem", curve: "bezier", divCount: 10 },
  sharp: { height: "5rem", curve: "linear", divCount: 4 },
  header: { position: "top", height: "8rem", curve: "ease-out" },
  footer: { position: "bottom", height: "8rem", curve: "ease-out" },
  sidebar: { position: "left", width: "6rem", strength: 2.5 },
  "page-header": { position: "top", height: "10rem", target: "page", strength: 3 },
  "page-footer": { position: "bottom", height: "10rem", target: "page", strength: 3 },
};

const CURVE_FUNCTIONS: Record<BlurCurve, (progress: number) => number> = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  "ease-in": (p) => p * p,
  "ease-out": (p) => 1 - (1 - p) ** 2,
  "ease-in-out": (p) => (p < 0.5 ? 2 * p * p : 1 - ((-2 * p + 2) ** 2) / 2),
};

const getGradientDirection = (position: BlurPosition): string => {
  const directions: Record<BlurPosition, string> = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  };
  return directions[position];
};

const debounce = <T extends (...args: never[]) => void>(fn: T, wait: number) => {
  let timeoutRef: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => fn(...args), wait);
  };
};

const useResponsiveDimension = (
  responsive: boolean,
  config: ResolvedGradualBlurConfig,
  key: "height" | "width",
) => {
  const [value, setValue] = useState<string | undefined>(config[key]);

  useEffect(() => {
    if (!responsive) return;

    const updateDimension = () => {
      const viewportWidth = window.innerWidth;
      let nextValue = config[key];

      if (key === "height") {
        if (viewportWidth <= 480 && config.mobileHeight) nextValue = config.mobileHeight;
        else if (viewportWidth <= 768 && config.tabletHeight) nextValue = config.tabletHeight;
        else if (viewportWidth <= 1024 && config.desktopHeight) nextValue = config.desktopHeight;
      }

      if (key === "width") {
        if (viewportWidth <= 480 && config.mobileWidth) nextValue = config.mobileWidth;
        else if (viewportWidth <= 768 && config.tabletWidth) nextValue = config.tabletWidth;
        else if (viewportWidth <= 1024 && config.desktopWidth) nextValue = config.desktopWidth;
      }

      setValue(nextValue);
    };

    const debouncedUpdate = debounce(updateDimension, 100);
    updateDimension();
    window.addEventListener("resize", debouncedUpdate);

    return () => window.removeEventListener("resize", debouncedUpdate);
  }, [responsive, config, key]);

  return responsive ? value : config[key];
};

const useIntersectionObserver = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  shouldObserve: boolean,
) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef, shouldObserve]);

  return isVisible;
};

type ResolvedGradualBlurConfig = GradualBlurProps &
  Required<
    Pick<
      GradualBlurProps,
      | "position"
      | "strength"
      | "height"
      | "divCount"
      | "exponential"
      | "zIndex"
      | "animated"
      | "duration"
      | "easing"
      | "opacity"
      | "curve"
      | "responsive"
      | "target"
      | "className"
      | "style"
    >
  >;

const GradualBlur = (props: GradualBlurProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo<ResolvedGradualBlurConfig>(() => {
    const presetConfig = props.preset ? PRESETS[props.preset] : undefined;
    return {
      ...DEFAULT_CONFIG,
      ...presetConfig,
      ...props,
    };
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, "height");
  const responsiveWidth = useResponsiveDimension(config.responsive, config, "width");
  const isVisible = useIntersectionObserver(containerRef, config.animated === "scroll");

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;
    const curveFn = CURVE_FUNCTIONS[config.curve] ?? CURVE_FUNCTIONS.linear;
    const direction = getGradientDirection(config.position);

    for (let index = 1; index <= config.divCount; index += 1) {
      let progress = index / config.divCount;
      progress = curveFn(progress);

      const blurValue = config.exponential
        ? Math.pow(2, progress * 4) * 0.0625 * currentStrength
        : 0.0625 * (progress * config.divCount + 1) * currentStrength;

      const p1 = Math.round((increment * index - increment) * 10) / 10;
      const p2 = Math.round(increment * index * 10) / 10;
      const p3 = Math.round((increment * index + increment) * 10) / 10;
      const p4 = Math.round((increment * index + increment * 2) * 10) / 10;

      let gradientStops = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradientStops += `, black ${p3}%`;
      if (p4 <= 100) gradientStops += `, transparent ${p4}%`;

      const layerStyle: CSSProperties = {
        maskImage: `linear-gradient(${direction}, ${gradientStops})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradientStops})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== "scroll"
            ? `backdrop-filter ${config.duration} ${config.easing}`
            : undefined,
        willChange: config.gpuOptimized ? "backdrop-filter, opacity" : undefined,
      };

      divs.push(<div key={index} className="absolute inset-0" style={layerStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle = useMemo<CSSProperties>(() => {
    const isVertical = config.position === "top" || config.position === "bottom";
    const isHorizontal = config.position === "left" || config.position === "right";
    const isPageTarget = config.target === "page";

    const baseStyle: CSSProperties = {
      position: isPageTarget ? "fixed" : "absolute",
      pointerEvents: config.hoverIntensity ? "auto" : "none",
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style,
    };

    const positionedStyle = baseStyle as Record<string, string | number | undefined>;

    if (isVertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth ?? "100%";
      positionedStyle[config.position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    }

    if (isHorizontal) {
      baseStyle.width = responsiveWidth ?? responsiveHeight;
      baseStyle.height = "100%";
      positionedStyle[config.position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  useEffect(() => {
    if (isVisible && config.animated === "scroll" && config.onAnimationComplete) {
      const timeoutRef = setTimeout(
        () => config.onAnimationComplete?.(),
        Number.parseFloat(config.duration) * 1000,
      );
      return () => clearTimeout(timeoutRef);
    }
  }, [config, isVisible]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "gradual-blur relative isolate",
        config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent",
        config.className,
      )}
      style={containerStyle}
      onMouseEnter={config.hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={config.hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div className="relative h-full w-full">{blurDivs}</div>
      {props.children ? <div className="relative">{props.children}</div> : null}
    </div>
  );
};

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = "GradualBlur";

export default GradualBlurMemo;