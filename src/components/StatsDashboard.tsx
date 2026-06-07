import React, { useMemo } from "react";
import { PEOPLE } from "../types";
import { STATS_CONFIG } from "../constants";
import { countUniqueRoles, aggregateWordsAndNameLength } from "../utils";

interface StatsDashboardProps {
  people: PEOPLE[];
}

function StatsDashboard({ people }: StatsDashboardProps) {
  const totalReviews = people.length;

  const uniqueRoles = countUniqueRoles(people);

  const { totalWords, maxNameLength } = aggregateWordsAndNameLength(people);

  const avgWords = Math.round(totalWords / totalReviews);

  const stats = useMemo(
    () => [
      { ...STATS_CONFIG[0], value: totalReviews },
      { ...STATS_CONFIG[1], value: uniqueRoles },
      { ...STATS_CONFIG[2], value: totalReviews > 0 ? avgWords : 0 },
      { ...STATS_CONFIG[3], value: maxNameLength },
    ],
    [totalReviews, uniqueRoles, avgWords, maxNameLength],
  );

  return (
    <div className="stats-dashboard">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <span className="stat-icon" aria-hidden="true">
            {stat.icon}
          </span>
          <div className="stat-info">
            <span className="stat-value">
              {stat.value}
              <span className="stat-suffix">{stat.suffix}</span>
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(StatsDashboard);
