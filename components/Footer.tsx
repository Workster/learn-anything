/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <footer>
            <div
                sx={{
                    position: 'absolute',
                    top: '94%',
                }}
            >
                <Styled.a href="https://twitter.com/learnanything_">
                    <svg
                        sx={{
                            flex: '0 0 32px',
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            minHeight: '32px',
                            color: 'inherit',
                            fill: 'currentColor',
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        }}
                        viewBox="0 0 32 32"
                    >
                        <g>
                            <path
                                d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z"/>
                        </g>
                    </svg>
                </Styled.a>
                <Styled.a href="https://github.com/learn-anything">
                    <svg
                        sx={{
                            flex: '0 0 32px',
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            minHeight: '32px',
                            color: 'inherit',
                            fill: 'currentColor',
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        }}
                        viewBox="0 0 32 32"
                    >
                        <g>
                            <path
                                d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"/>
                        </g>
                    </svg>
                </Styled.a>
                <Styled.a href="https://www.patreon.com/learnanything">
                    <svg
                        sx={{
                            flex: '0 0 32px',
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            minHeight: '32px',
                            color: 'inherit',
                            fill: 'currentColor',
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        }}
                        viewBox="0 0 32 32"
                    >
                        <g>
                            <path
                                d="M28 16C28 27 27 28 16 28C5 28 4 27 4 16C4 5 5 4 16 4C27 4 28 5 28 16ZM18.2582 9C15.3588 9 13 11.3586 13 14.2579C13 17.1484 15.3588 19.5 18.2582 19.5C21.1485 19.5 23.5 17.1484 23.5 14.2579C23.5 11.3586 21.1485 9 18.2582 9ZM11.0017 23H8.50174V9H11.0017V23Z"/>
                        </g>
                    </svg>
                </Styled.a>
                <Styled.a href="https://discord.gg/KKYdWjt">
                    <svg
                        sx={{
                            flex: '0 0 32px',
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            minHeight: '32px',
                            color: 'inherit',
                            fill: 'currentColor',
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        }}
                        viewBox="0 0 32 32"
                    >
                        <g>
                            <path
                                d="M16 28C27 28 28 27 28 16C28 5 27 4 16 4C5 4 4 5 4 16C4 27 5 28 16 28ZM20.2842 22.25C20.2842 22.25 19.7295 21.6101 19.2671 21.0447C21.286 20.4941 22.0565 19.2738 22.0565 19.2738C21.4247 19.6756 20.8236 19.9584 20.2842 20.1518C19.5137 20.4643 18.774 20.6726 18.0497 20.7917C16.5702 21.0595 15.214 20.9851 14.0582 20.7768C13.1798 20.6131 12.4247 20.375 11.7928 20.1369C11.4384 20.003 11.0531 19.8393 10.6678 19.631C10.6447 19.6161 10.6216 19.6049 10.5985 19.5938C10.5753 19.5826 10.5522 19.5715 10.5291 19.5566C10.4983 19.5417 10.4829 19.5268 10.4675 19.5119C10.1901 19.3631 10.036 19.259 10.036 19.259C10.036 19.259 10.7757 20.4494 12.7329 21.0149C12.2705 21.5804 11.7003 22.25 11.7003 22.25C8.29452 22.1458 7 19.9881 7 19.9881C7 15.1965 9.21918 11.3126 9.21918 11.3126C11.4384 9.70548 13.5497 9.75012 13.5497 9.75012L13.7038 9.92869C10.9298 10.7025 9.65069 11.8781 9.65069 11.8781C9.65069 11.8781 9.98973 11.6995 10.5599 11.4465C12.2089 10.7471 13.5188 10.5537 14.0582 10.509L14.0928 10.5034C14.1705 10.4906 14.2395 10.4793 14.3202 10.4793C15.2603 10.3602 16.3236 10.3305 17.4332 10.4495C18.8973 10.6132 20.4692 11.0299 22.0719 11.8781C22.0719 11.8781 20.8545 10.762 18.2346 9.98822L18.4503 9.75012C18.4503 9.75012 20.5616 9.70548 22.7808 11.3126C22.7808 11.3126 25 15.1965 25 19.9881C25 19.9881 23.6901 22.1458 20.2842 22.25ZM13.1181 15.3005C12.2397 15.3005 11.5462 16.0446 11.5462 16.9523C11.5462 17.86 12.2551 18.6041 13.1181 18.6041C13.9965 18.6041 14.69 17.86 14.69 16.9523C14.7054 16.0446 13.9965 15.3005 13.1181 15.3005ZM18.7431 15.3005C17.8647 15.3005 17.1712 16.0446 17.1712 16.9523C17.1712 17.86 17.8801 18.6041 18.7431 18.6041C19.6215 18.6041 20.315 17.86 20.315 16.9523C20.315 16.0446 19.6215 15.3005 18.7431 15.3005Z"/>
                        </g>
                    </svg>
                </Styled.a>
            </div>
        </footer>
    )
}

export default Footer
