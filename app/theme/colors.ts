// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  background: "#E5E5E5",
  primary: "#9378FF",
  secondary: "#CABDFD",
  black: "#120E21",
  white: "#FFFFFF",
  angry: "#F2D6CD",
  grey: "#99879D",
  pink: "#FBEAFF",
  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.black,
  /**
   * Secondary text information.
   */
  textDim: palette.grey,
  /**
   * The default color of the screen background.
   */
  background: palette.background,
  /**
   * The default border color.
   */
  border: palette.black,
  /**
   * The main tinting color.
   */
  tint: palette.primary,
  /**
   * A subtle color used for lines.
   */
  separator: palette.black,
  /**
   * Error messages.
   */
  error: palette.angry,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry,
}
