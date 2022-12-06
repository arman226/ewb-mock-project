export default (theme) => ({
  bold: {
    fontWeight: "700",
  },
  whiteText: {
    color: theme.palette.light.main,
  },
  darkText: {
    color: theme.palette.dark.main,
  },
  secondaryBackgroundColor: {
    backgroundColor: theme.palette.secondary.main,
  },
  primaryBackgroundColor: {
    backgroundColor: theme.palette.primary.main,
  },
  centeredText: {
    textAlign: "center",
  },
  primaryColorText: {
    color: theme.palette.primary.main,
  },
  primaryColorContrastText: {
    color: theme.palette.primary.contrastText,
  },
  secondaryColorText: {
    color: theme.palette.secondary.main,
  },
  homeSectionTitle: {
    fontSize: 50,
    fontFamily: "PROSTY",
  },
  homeSectionTitleContainer: {
    borderBottom: "red",
    borderBottomStyle: "solid",
  },
  webPageDefaultLayout: {
    paddingLeft: theme.dimensions.paddingHorizontal,
    paddingRight: theme.dimensions.paddingHorizontal,
  },
  footerSpacer: { textAlign: "center", paddingTop: 20, paddingBottom: 20 },
});
