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
  appBar: {
    borderBottom: 1,
    borderBottomWidth: 1.5,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.main,
    borderTop: 1.5,
    borderTopWidth: 1.5,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.dark.main,
    backgroundColor: theme.palette.light.main,
  },
  webPageDefaultLayout: {
    paddingLeft: theme.dimensions.paddingHorizontal,
    paddingRight: theme.dimensions.paddingHorizontal,
  },
  footerSpacer: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
