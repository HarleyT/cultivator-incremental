export const createTicker = (onTick: onTickFn) = {
    const tickerContext = constructTickerContext();
    return {
        startTicker() {
            if (tickerContext.isTickerRunning) return;
            tickerContext.isTickerRunning = true;
            requestAnimationFrame(() =>
            doTick({
                tickerContext,
                oldTime: performance.now(),
                onTick,
            }),
            );
        },
        pauseTicker() {
            tickerContext.isTickerRunning = false;
        },
    };
};

const doTick = ({
    tickerContext,
    oldTime,
    onTick,
}: {
    tickerContext: TickerContext;
    oldTime: number;
    onTick: onTickFn;
}) => {
    if (!tickerContext.isTickerRunning) return;
    onTick?.({ deltaTime: performance.now() - oldTime });
    oldTime = performance.now();
    requestAnimationFrame(() =>
    doTick({
        tickerContext,
        oldTime,
        onTick,
    }),
    );
};

const constructTickerContext = () => {
    return {
        isTickerRunning: false,
    };
};

type onTickFn = (tickContext: { deltaTime: number }) => void;
type TickerContext = ReturnType<typeof constructTickerContext>;