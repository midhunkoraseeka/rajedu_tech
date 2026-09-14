import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/management-quota-admissions", destination: "/management-quota", permanent: true },
      { source: "/admissions/btech", destination: "/management-quota/engineering", permanent: true },
      { source: "/admissions/mbbs", destination: "/management-quota/medical", permanent: true },
      { source: "/admissions/mba", destination: "/management-quota/management", permanent: true },
    ];
  },
};

export default nextConfig;
