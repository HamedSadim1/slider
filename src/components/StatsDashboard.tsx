/**
 * StatsDashboard Component
 *
 * Toont een overzicht van statistieken afgeleid van de review data,
 * boven de slider carrousel.
 */

import { PEOPLE } from "../types";

interface StatsDashboardProps {
  people: PEOPLE[];
}

function StatsDashboard({ people }: StatsDashboardProps) {
  const totalReviews = people.length;

  const uniqueRoles = new Set(people.map((p) => p.title)).size;

  const totalWords = people.reduce((sum, p) => {
    return sum + p.quote.split(/\s+/).length;
  }, 0);

  const avgWords = Math.round(totalWords / totalReviews);

  const maxNameLength = people.reduce((max, p) => {
    return Math.max(max, p.name.length);
  }, 0);

  const stats = [
    {
      label: "Total Reviews",
      value: totalReviews,
      suffix: "",
      icon: "★",
    },
    {
      label: "Unique Roles",
      value: uniqueRoles,
      suffix: "",
      icon: "◆",
    },
    {
      label: "Avg. Words",
      value: totalReviews > 0 ? avgWords : 0,
      suffix: " /review",
      icon: "✎",
    },
    {
      label: "Max Name Len",
      value: maxNameLength,
      suffix: " chars",
      icon: "●",
    },
  ];

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

export default StatsDashboard;
