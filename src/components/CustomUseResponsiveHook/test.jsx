import useResponsive from "."

export default function TestUseResponsiveHook() {
    const windowSize = useResponsive();
    const { width, height } = windowSize;

    return (
        <div>
            <h1>Test useResponsiveHook</h1>
            <p>Resize the window to see the effect</p>
            <p>width: {width}</p>
            <p>height: {height}</p>
        </div>
    )
}