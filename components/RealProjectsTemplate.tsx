// Template สำหรับเพิ่มโปรเจคจริงของคุณ
// คัดลอกไปใส่ใน app/projects/page.tsx

const realProjects = [
  {
    title: "Real-time Factory Monitoring Dashboard",
    description: "พัฒนาระบบติดตามการผลิตแบบ Real-time สำหรับโรงงานผลิต เชื่อมต่อ PLC 15 เครื่อง ลดเวลาการรายงาน 80%",
    technologies: ["NextJS", "WebSocket", "Python", "PostgreSQL", "Docker"],
    category: "Industrial IoT",
    year: "2024",
    link: "https://github.com/yuen30/factory-dashboard", // ใส่ link จริง
    metrics: {
      users: "50+ operators",
      uptime: "99.9%",
      performance: "80% faster reporting"
    }
  },
  {
    title: "Odoo ERP Customization - MRP Module",
    description: "ปรับแต่ง Odoo MRP module สำหรับโรงงานผลิต เพิ่มฟีเจอร์ Forecast และ BOM management ที่ซับซ้อน",
    technologies: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
    category: "ERP Development", 
    year: "2023",
    link: "https://github.com/yuen30/odoo-mrp-custom", // ใส่ link จริง
    metrics: {
      modules: "5 custom modules",
      efficiency: "45% faster planning",
      accuracy: "95% forecast accuracy"
    }
  },
  {
    title: "WMS System - Seiwa Pioneer Logistics",
    description: "ระบบจัดการคลังสินค้าครบวงจร รองรับ EDI, Inbound/Outbound, และ Real-time inventory tracking",
    technologies: ["Python", "Django", "React", "MSSQL", "Raspberry Pi"],
    category: "Logistics Technology",
    year: "2022",
    link: "#", // ถ้าไม่สามารถแชร์ได้เพราะเป็นของบริษัท
    metrics: {
      throughput: "60% faster processing",
      accuracy: "99.8% inventory accuracy", 
      integration: "15+ EDI partners"
    }
  },
  {
    title: "Power Automate Integration Platform",
    description: "ระบบเชื่อมต่อ Formula accounting กับระบบภายนอก ใช้ Power Automate และ custom APIs",
    technologies: ["Power Automate", "Python", "REST APIs", "Azure", "CI/CD"],
    category: "System Integration",
    year: "2024",
    link: "https://github.com/yuen30/formula-integration", // ใส่ link จริง
    metrics: {
      automation: "90% automated processes",
      time_saved: "20 hours/week",
      integrations: "8 external systems"
    }
  }
];

// คำแนะนำการใช้งาน:
// 1. เปลี่ยนข้อมูลให้ตรงกับโปรเจคจริงของคุณ
// 2. เพิ่ม GitHub repositories ที่เกี่ยวข้อง
// 3. ใส่ตัวเลขผลลัพธ์จริง
// 4. เพิ่มรูปภาพ screenshots ใน public/projects/
// 5. อัปเดต technologies ให้ตรงกับที่ใช้จริง