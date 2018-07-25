import * as React from 'react';
import { Box } from 'grid-styled';

interface VisProps {
  threshold: string;
}

export default class Vis extends React.Component <VisProps> {
  public render() {
    const { threshold } = this.props;
    let thresholdVal = parseInt(threshold, 10);
    if (!thresholdVal) {
      thresholdVal = 0;
    }
    // TODO(sarahgrace): Find a better way to draw the line at some pos
    const divHeight = 500;
    // TODO(sarahgrace): Should be the historical max, could pass it in with props
    const max = 1000;
    const lineStyle = {
      bottom: divHeight * (thresholdVal/max)
    };
    return (
      <Box width={1} className="Vis">
        <Box className="line" style={lineStyle}>{threshold}</Box>
      </Box>
    );
  }
}