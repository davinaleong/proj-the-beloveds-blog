import * as React from "react"

const BreakLinesHelper = (string: string, keyPrefix: string) => {
  const lines: any[] = []
    const split = string.split(/\r\n/g)
    split.forEach((segment, index) => {
      lines.push(
        <span key={keyPrefix + index}>{segment} <br /></span>
      )
    })
    return lines;
}

export default BreakLinesHelper