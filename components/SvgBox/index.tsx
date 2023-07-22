import type { FC, SVGProps } from 'react';
import React, { useEffect, useRef, useState } from 'react';

type Props = SVGProps<SVGElement>;

function calculateViewBox(svgElement: SVGSVGElement): string {
  const viewBox = { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY, width: 0, height: 0 };
  const rect = svgElement.getBoundingClientRect();
  viewBox.x = 0;
  viewBox.y = 0;
  viewBox.width = rect.width;
  viewBox.height = rect.height;
  let maxWH = 0;
  for (let i = 0; i < svgElement.children.length; i++) {
    const child = svgElement.children[i];
    if (child instanceof SVGGraphicsElement && child.getBBox) {
      const bbox = child.getBBox();
      const childRect = child.getBoundingClientRect();
      const x = childRect.left - rect.left;
      const y = childRect.top - rect.top;
      const width = bbox.width;
      const height = bbox.height;
      viewBox.x = Math.min(viewBox.x, x);
      viewBox.y = Math.min(viewBox.y, y);
      viewBox.width = Math.max(viewBox.width, x + width);
      viewBox.height = Math.max(viewBox.height, y + height);
      maxWH = Math.max(maxWH, width, height);
    }
    if (child.children.length > 0) {
      const childViewBox = calculateViewBox(child as SVGSVGElement);
      const [vx, vy, vwidth, vheight] = childViewBox.split(' ').map(Number.parseFloat);
      viewBox.x = Math.min(viewBox.x, vx);
      viewBox.y = Math.min(viewBox.y, vy);
      viewBox.width = Math.max(viewBox.width, vx + vwidth);
      viewBox.height = Math.max(viewBox.height, vy + vheight);
      maxWH = Math.max(maxWH, vwidth, vheight);
    }
  }
  viewBox.width = Math.max(maxWH, viewBox.width, 0);
  viewBox.height = Math.max(maxWH, viewBox.height, 0);
  return `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
}
const SvgBox: FC<Props> = ({ children, ...rest }) => {
  const { className, color, height, width, style = { fill: '#888888' } } = rest;
  const [viewBox, setViewBox] = useState('0 0 24 24');
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current)
      setViewBox(calculateViewBox(svgRef.current));
  }, [svgRef.current]);
  return (
    <svg key={children as string} ref={svgRef} viewBox={viewBox} className={className} color={color} height={height} width={width} style={style} dangerouslySetInnerHTML={{ __html: children as string }}>
    </svg>
  );
};

export default SvgBox;
