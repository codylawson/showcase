import React from 'react';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from 'recharts';

import ShowcaseTheme from '../../theme/ShowcaseTheme';

const data = [
  { subject: 'HTML', A: 100, fullMark: 150 },
  { subject: 'CSS', A: 110, fullMark: 150 },
  { subject: 'JS', A: 95, fullMark: 150 },
  { subject: 'Prototyping', A: 100, fullMark: 150 },
  { subject: 'Design', A: 80, fullMark: 150 },
  { subject: 'UX', A: 85, fullMark: 150 }
];

const SkillChart = props => {
  return (
    <ResponsiveContainer>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Cody"
          dataKey="A"
          stroke={ShowcaseTheme.palette.primary2}
          fill={ShowcaseTheme.palette.primary}
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillChart;
