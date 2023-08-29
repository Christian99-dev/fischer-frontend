def create_type_scale(base, scale, max):
    curr = round(base / scale)
    out = ""
    for i in range(max, 0, -1):
        out += f"\t\t--fs-{i}: {curr}px;\n"
        curr = round(curr * scale)
    return out
      
def create_media(device, base, scale, max):
    return f"\t\t@media ${{device.{device}}} {{\n{create_type_scale(base, scale, max)}\t\t}}\n\n"

with open("../../theme/font.js", "w+") as cssfile:
  head = "import { css } from 'styled-components';\nimport { device } from './breakpoints';\n\nexport default css`\n  :root {\n"
  footer = "  }\n`;"
  dynamic = create_media("desktopXL", 16, 1.4, 6) + create_type_scale(16, 1.333, 6) + "\n" + create_media("laptop", 16, 1.3, 6) + create_media("tablet", 16, 1.25, 6) + create_media("mobile", 16, 1.2, 6)
  cssfile.write(head + dynamic + footer)

    


