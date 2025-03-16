interface TypeformWidget {
    createWidget: (
        formId: string,
        options: {
            container: HTMLElement;
            height?: number;
            hidden?: Record<string, string>;
            onReady?: () => void;
            onSubmit?: () => void;
            [key: string]: any;
        }
    ) => void;
}

declare global {
    interface Window {
        tf: TypeformWidget;
    }
} 