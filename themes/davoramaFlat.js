// fswatch -o davoramaFlat.js | xargs -n1 -I{} sh -c 'node davoramaFlat.js > /Users/davidcabanne/.config/zed/themes/davoramaFlat.json'

const light_000 = "#282c34";
const light_010 = "#3e4148";
const light_020 = "#53565d";
const light_030 = "#696b71";
const light_040 = "#7e8085";
const light_050 = "#94969a";
const light_060 = "#a9abae";
const light_070 = "#bfc0c2";
const light_080 = "#d4d5d6";
const light_090 = "#eaeaeb";
const light_100 = "#ffffff";

const dark_000 = "#282c34";
const dark_010 = "#24282f";
const dark_020 = "#20232a";
const dark_030 = "#1c1f24";
const dark_040 = "#181a1f";
const dark_050 = "#14161a";
const dark_060 = "#101215";
const dark_070 = "#0c0d10";
const dark_080 = "#08090a";
const dark_090 = "#040405";
const dark_100 = "#000000";

const testColor = "#00ff04";

const themeName = "DavoramaFlat";
const author = "Davorama";

const backgroundPrimary = dark_010;
const backgroundSecondary = dark_020;
const backgroundThird = dark_000;
const constant = "#d09966"; // yellowish primary
const property = "#D19A66"; // yellowish secondary
const string = "#97C178"; // green
const variable = "#DF6B74"; // red
const type = "#E5BF7A"; // component bright Yellow
const hint = "#C678DD"; // purple
const functionPrimary = "#61AFEE"; // blue
const danger = "#A64253";

const myTheme = {
  $schema: "https://zed.dev/schema/themes/v0.1.0.json",
  name: "DavoramaFlat",
  author: "Davorama",
  themes: [
    {
      name: "DavoramaFlat",
      appearance: "dark",
      style: {
        border: backgroundSecondary,
        "border.variant": backgroundSecondary,
        "border.focused": null,
        "border.selected": null,
        "border.transparent": null,
        "border.disabled": null,
        "elevated_surface.background": "#1d1f23",
        "surface.background": null,
        background: backgroundPrimary,
        "element.background": backgroundPrimary,
        "element.hover": "#292d35",
        "element.active": null,
        "element.selected": "#2c313a",
        "element.disabled": null,
        "drop_target.background": null,
        "ghost_element.background": null,
        "ghost_element.hover": "#292d35",
        "ghost_element.active": null,
        "ghost_element.selected": "#2c313a",
        "ghost_element.disabled": null,
        text: light_080,
        "text.muted": light_050,
        "text.placeholder": null,
        "text.disabled": null,
        "text.accent": null,
        icon: null,
        "icon.muted": null,
        "icon.disabled": null,
        "icon.placeholder": null,
        "icon.accent": null,
        "status_bar.background": backgroundThird,
        "title_bar.background": backgroundPrimary,
        "toolbar.background": backgroundPrimary,
        "tab_bar.background": backgroundPrimary,
        "tab.inactive_background": backgroundThird,
        "tab.active_background": light_010,
        "search.match_background": null,
        "panel.background": backgroundPrimary,
        "panel.focused_border": null,
        "pane.focused_border": null,
        "scrollbar_thumb.background": "#4E566680",
        "scrollbar.thumb.hover_background": "#5A637580",
        "scrollbar.thumb.border": "#4E566680",
        "scrollbar.track.background": backgroundPrimary,
        "scrollbar.track.border": backgroundSecondary,
        "editor.foreground": light_070,
        "editor.background": backgroundPrimary,
        "editor.gutter.background": backgroundPrimary,
        "editor.subheader.background": null,
        "editor.active_line.background": "#383E4A",
        "editor.highlighted_line.background": null,
        "editor.line_number": "#495162",
        "editor.active_line_number": light_090,
        "editor.invisible": null,
        "editor.wrap_guide": null,
        "editor.active_wrap_guide": null,
        "editor.document_highlight.read_background": null,
        "editor.document_highlight.write_background": null,
        "terminal.background": backgroundSecondary,
        "terminal.foreground": "#c8c8c8ff", // White
        "terminal.bright_foreground": "#ffffffff", // Bright White
        "terminal.dim_foreground": "#dcdcdcff", // Dim White
        "terminal.ansi.black": "#000000ff", // Black
        "terminal.ansi.bright_black": "#373737ff", // Bright Black
        "terminal.ansi.dim_black": "#000000ff", // Dim Black
        "terminal.ansi.red": "#c80000ff", // Red
        "terminal.ansi.bright_red": "#ff0000ff", // Bright Red
        "terminal.ansi.dim_red": "#910000ff", // Dim Red
        "terminal.ansi.green": "#00c800ff", // Green
        "terminal.ansi.bright_green": "#00ff00ff", // Bright Green
        "terminal.ansi.dim_green": "#009100ff", // Dim Green
        "terminal.ansi.yellow": "#c8c800ff", // Yellow
        "terminal.ansi.bright_yellow": "#ffff00ff", // Bright Yellow
        "terminal.ansi.dim_yellow": "#919100ff", // Dim Yellow
        "terminal.ansi.blue": "#0000c8ff", // Blue
        "terminal.ansi.bright_blue": "#0000ffff", // Bright Blue
        "terminal.ansi.dim_blue": "#000091ff", // Dim Blue
        "terminal.ansi.magenta": "#c800c8ff", // Magenta
        "terminal.ansi.bright_magenta": "#ff00ffff", // Bright Magenta
        "terminal.ansi.dim_magenta": "#910091ff", // Dim Magenta
        "terminal.ansi.cyan": "#00c8c8ff", // Cyan
        "terminal.ansi.bright_cyan": "#00ffffff", // Bright Cyan
        "terminal.ansi.dim_cyan": "#009191ff", // Dim Cyan
        "terminal.ansi.white": "#c8c8c8ff", // White
        "terminal.ansi.bright_white": "#ffffffff", // Bright White
        "terminal.ansi.dim_white": "#dcdcdcff", // Dim White
        "link_text.hover": null,
        conflict: null,
        "conflict.background": null,
        "conflict.border": null,
        created: "#73C991",
        "created.background": null,
        "created.border": null,
        deleted: null,
        "deleted.background": null,
        "deleted.border": null,
        error: "#c24038",
        "error.background": null,
        "error.border": null,
        hidden: null,
        "hidden.background": null,
        "hidden.border": null,
        hint: "#eaeaeb",
        "hint.background": dark_000,
        "hint.border": dark_030,
        ignored: null,
        "ignored.background": null,
        "ignored.border": null,
        // Typescript
        info: "#6960A9",
        "info.background": null,
        "info.border": null,
        modified: "#E0BF8B",
        "modified.background": null,
        "modified.border": null,
        predictive: null,
        "predictive.background": null,
        "predictive.border": null,
        renamed: null,
        "renamed.background": null,
        "renamed.border": null,
        success: null,
        "success.background": null,
        "success.border": null,
        unreachable: null,
        "unreachable.background": null,
        "unreachable.border": null,
        warning: danger,
        "warning.background": danger,
        "warning.border": danger,
        players: [
          {
            cursor: "#39bae5",
            background: "#39bae5ff",
            selection: "#89bae51d",
          },
        ],
        syntax: {
          attribute: {
            color: "#98c379",
            font_style: null,
            font_weight: null,
          },
          boolean: {
            color: variable,
            font_style: null,
            font_weight: null,
          },
          comment: {
            color: light_030,
            font_style: "italic",
            font_weight: null,
          },
          "comment.doc": {
            color: light_030,
            font_style: null,
            font_weight: null,
          },
          constant: {
            color: constant,
            font_style: null,
            font_weight: null,
          },
          constructor: {
            color: hint,
            font_style: null,
            font_weight: null,
          },
          // unknown
          embedded: {
            color: "#032f62ff",
            font_style: null,
            font_weight: null,
          },
          // unknown
          emphasis: {
            color: "#5c78e2ff",
            font_style: null,
            font_weight: null,
          },
          // unknown
          "emphasis.strong": {
            color: "#ad6e25ff",
            font_style: null,
            font_weight: 700,
          },
          // unknown
          enum: {
            color: "#005cc5ff",
            font_style: null,
            font_weight: null,
          },
          function: {
            color: functionPrimary,
            font_style: null,
            font_weight: 600,
          },
          hint: {
            color: hint,
            font_style: null,
            font_weight: 700,
          },
          keyword: {
            color: hint,
            font_style: null,
            font_weight: null,
          },
          // unknown
          label: {
            color: "#5c78e2ff",
            font_style: null,
            font_weight: null,
          },
          // unknown
          link_text: {
            color: "#5b79e3ff",
            font_style: "italic",
            font_weight: null,
          },
          // unknown
          link_uri: {
            color: "#3882b7ff",
            font_style: null,
            font_weight: null,
          },
          number: {
            color: constant,
            font_style: null,
            font_weight: null,
          },
          operator: {
            color: light_070,
            font_style: null,
            font_weight: null,
          },
          // unknown
          predictive: {
            color: "#9b9ec6ff",
            font_style: "italic",
            font_weight: null,
          },
          // unknown
          preproc: {
            color: "#383a41ff",
            font_style: null,
            font_weight: null,
          },
          // unknown
          primary: {
            color: "#00ff04",
            font_style: null,
            font_weight: null,
          },
          property: {
            color: property,
            font_style: null,
            font_weight: null,
          },
          punctuation: {
            color: light_050,
            font_style: null,
            font_weight: null,
          },
          "punctuation.bracket": {
            color: light_050,
            font_style: null,
            font_weight: null,
          },
          "punctuation.delimiter": {
            color: light_050,
            font_style: null,
            font_weight: null,
          },
          "punctuation.list_marker": {
            color: light_050,
            font_style: null,
            font_weight: null,
          },
          "punctuation.special": {
            color: light_050,
            font_style: null,
            font_weight: null,
          },
          string: {
            color: string,
            font_style: null,
            font_weight: null,
          },
          "string.escape": {
            color: string,
            font_style: null,
            font_weight: null,
          },
          "string.regex": {
            color: string,
            font_style: null,
            font_weight: null,
          },
          "string.special": {
            color: string,
            font_style: null,
            font_weight: null,
          },
          "string.special.symbol": {
            color: string,
            font_style: null,
            font_weight: null,
          },
          tag: {
            color: hint,
            font_style: null,
            font_weight: null,
          },
          "text.literal": {
            color: "#e5c07b",
            font_style: null,
            font_weight: null,
          },
          // unknown
          title: {
            color: "#d3604fff",
            font_style: null,
            font_weight: 400,
          },
          type: {
            color: type,
            font_style: null,
            font_weight: 600,
          },
          variable: {
            color: variable,
            font_style: null,
            font_weight: null,
          },
          "variable.special": {
            color: variable,
            font_style: null,
            font_weight: null,
          },
        },
      },
    },
  ],
};

// [=>] OUTPUT:
console.log(JSON.stringify(myTheme, null, 2));
