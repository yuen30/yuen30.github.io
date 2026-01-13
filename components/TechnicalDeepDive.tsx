"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Database, Server, Cpu, ChevronDown, ExternalLink } from "lucide-react";

const technicalAreas = [
    {
        id: "architecture",
        title: "System Architecture",
        icon: Server,
        color: "from-blue-500 to-cyan-500",
        overview: "Designing scalable, maintainable enterprise systems",
        details: {
            approach: "Domain-Driven Design with Microservices Architecture",
            patterns: ["Event Sourcing", "CQRS", "Saga Pattern", "Circuit Breaker"],
            technologies: ["Docker", "Kubernetes", "Redis", "RabbitMQ", "Nginx"],
            codeExample: `// Event-driven architecture example
class OrderService {
  async processOrder(orderData) {
    const order = await this.createOrder(orderData);
    
    // Publish event for other services
    await this.eventBus.publish('order.created', {
      orderId: order.id,
      customerId: order.customerId,
      items: order.items
    });
    
    return order;
  }
}`,
            benefits: [
                "99.9% uptime across production systems",
                "Horizontal scaling capability",
                "Fault tolerance and resilience",
                "Easy maintenance and updates"
            ]
        }
    },
    {
        id: "database",
        title: "Database Design",
        icon: Database,
        color: "from-green-500 to-emerald-500",
        overview: "Optimized data modeling for high-performance applications",
        details: {
            approach: "Performance-first database design with proper indexing",
            patterns: ["Repository Pattern", "Unit of Work", "Data Mapper", "Connection Pooling"],
            technologies: ["PostgreSQL", "Redis", "MongoDB", "InfluxDB", "Elasticsearch"],
            codeExample: `-- Optimized inventory query with proper indexing
CREATE INDEX CONCURRENTLY idx_inventory_location_product 
ON inventory (location_id, product_id, created_at DESC);

-- Complex warehouse analytics query
WITH inventory_summary AS (
  SELECT 
    location_id,
    product_id,
    SUM(quantity) as total_qty,
    AVG(unit_cost) as avg_cost
  FROM inventory 
  WHERE created_at >= NOW() - INTERVAL '30 days'
  GROUP BY location_id, product_id
)
SELECT * FROM inventory_summary 
WHERE total_qty > 0;`,
            benefits: [
                "Sub-second query response times",
                "Handles 10M+ records efficiently",
                "Automated backup and recovery",
                "Real-time analytics capabilities"
            ]
        }
    },
    {
        id: "integration",
        title: "Industrial IoT",
        icon: Cpu,
        color: "from-orange-500 to-red-500",
        overview: "Real-time PLC integration and monitoring systems",
        details: {
            approach: "WebSocket-based real-time communication with industrial equipment",
            patterns: ["Observer Pattern", "Command Pattern", "State Machine", "Message Queue"],
            technologies: ["WebSocket", "MQTT", "Modbus", "OPC-UA", "InfluxDB"],
            codeExample: `// Real-time PLC data streaming
class PLCMonitor {
  constructor() {
    this.ws = new WebSocket('ws://localhost:8080/plc');
    this.dataBuffer = new Map();
  }
  
  async streamData() {
    this.ws.on('message', (data) => {
      const plcData = JSON.parse(data);
      
      // Process real-time data
      this.processMetrics(plcData);
      
      // Broadcast to dashboard
      this.broadcastToClients({
        timestamp: Date.now(),
        machineId: plcData.id,
        temperature: plcData.temp,
        pressure: plcData.pressure,
        status: plcData.status
      });
    });
  }
}`,
            benefits: [
                "Real-time monitoring (< 100ms latency)",
                "15+ machines connected simultaneously",
                "Predictive maintenance alerts",
                "Historical data analysis"
            ]
        }
    },
    {
        id: "automation",
        title: "DevOps & Automation",
        icon: Code,
        color: "from-purple-500 to-pink-500",
        overview: "CI/CD pipelines and infrastructure automation",
        details: {
            approach: "GitOps workflow with automated testing and deployment",
            patterns: ["Infrastructure as Code", "Blue-Green Deployment", "Feature Flags", "Monitoring"],
            technologies: ["GitHub Actions", "Docker", "Terraform", "Ansible", "Prometheus"],
            codeExample: `# GitHub Actions CI/CD Pipeline
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: |
          npm install
          npm run test:coverage
          npm run lint
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Production
        run: |
          docker build -t app:latest .
          docker push registry/app:latest
          kubectl set image deployment/app app=registry/app:latest`,
            benefits: [
                "Zero-downtime deployments",
                "Automated testing coverage 90%+",
                "Infrastructure provisioning in minutes",
                "Rollback capability within seconds"
            ]
        }
    }
];

export const TechnicalDeepDive = () => {
    const [activeArea, setActiveArea] = useState<string | null>(null);

    return (
        <section id="technical-deep-dive" className="py-24 px-6 bg-white/[0.02]" aria-labelledby="technical-title">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 id="technical-title" className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Deep Dive</span>
                    </h2>
                    <p className="text-white/60 max-w-3xl mx-auto text-lg">
                        Explore the technical approaches and methodologies behind successful enterprise solutions
                    </p>
                </div>

                <div className="space-y-6">
                    {technicalAreas.map((area, index) => {
                        const Icon = area.icon;
                        const isActive = activeArea === area.id;
                        
                        return (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveArea(isActive ? null : area.id)}
                                    className="w-full p-8 text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                                                <p className="text-white/70">{area.overview}</p>
                                            </div>
                                        </div>
                                        <ChevronDown 
                                            className={`w-6 h-6 text-white/60 transition-transform ${isActive ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/10"
                                        >
                                            <div className="p-8 space-y-8">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* Left Column */}
                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-indigo-400 mb-3">Approach</h4>
                                                            <p className="text-white/70">{area.details.approach}</p>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Design Patterns</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {area.details.patterns.map((pattern, patternIndex) => (
                                                                    <span
                                                                        key={patternIndex}
                                                                        className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300"
                                                                    >
                                                                        {pattern}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {area.details.technologies.map((tech, techIndex) => (
                                                                    <span
                                                                        key={techIndex}
                                                                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits</h4>
                                                            <ul className="space-y-2">
                                                                {area.details.benefits.map((benefit, benefitIndex) => (
                                                                    <li key={benefitIndex} className="text-white/70 flex items-center gap-2">
                                                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                                        {benefit}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Right Column - Code Example */}
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-orange-400 mb-3">Code Example</h4>
                                                        <div className="bg-slate-900/50 rounded-lg p-4 border border-white/10">
                                                            <pre className="text-sm text-white/80 overflow-x-auto">
                                                                <code>{area.details.codeExample}</code>
                                                            </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <motion.a
                        href="/blog"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 btn-primary"
                    >
                        Read Technical Articles
                        <ExternalLink size={18} />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};