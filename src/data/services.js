import {
  Home as HomeIcon,
  Building2,
  Factory,
  Warehouse,
  Wifi,
  Fingerprint,
  DoorOpen,
  Wrench,
} from 'lucide-react';
import homeSecurity from "../assets/home-security.jpg";
import officeSecurity from "../assets/corporate-area.jpg";
import IndustrialSecurity from "../assets/industry.jpg";
import BiometricAttendance from "../assets/Biometric-Attendance.jpg"
import VideoDoorPhone from "../assets/video-cctv.jpg"
import AnnualMaintenanceContract from "../assets/Annual-Maintenance.jpg"
import NetworkingCabling from "../assets/Access-Control-Installation.jpg"
// import commercial from "../assets/Looking for top-notch security and surveillance services_ Look no further! Veterans Security & Surveillance, LLC is here to provide you with the best solutions for your residential or commercial property_ Our depen.jpg"
const services = [
  {
    slug: 'home-security',
    icon: HomeIcon,
    title: 'Home Security',
    short: 'Discreet, high-resolution surveillance built around family life.',
    description:
      'Complete residential CCTV and smart security systems designed for entrances, driveways, and living spaces — monitored from your phone wherever you are.',
    benefits: ['Night-vision dome & bullet cameras', 'Mobile app live viewing', 'Motion alert notifications', 'Discreet, weatherproof housing'],
    features: ['HD & 4K camera options', 'Cloud or local NVR storage', 'Two-way audio', 'Smart doorbell integration'],
    image: homeSecurity,
  },
  {
    slug: 'office-security',
    icon: Building2,
    title: 'Office Security',
    short: 'Access control and surveillance tuned for daily business operations.',
    description:
      'Protect staff, assets, and sensitive areas with layered coverage across entrances, reception, server rooms, and parking — integrated with attendance systems.',
    benefits: ['Entry & exit monitoring', 'Visitor management support', 'Server room protection', 'Attendance integration'],
    features: ['PTZ coverage for open floors', 'Biometric door access', 'Remote multi-branch viewing', 'Audit-ready footage logs'],
    image: officeSecurity,
  },
  {
    slug: 'commercial-security',
    icon: Building2,
    title: 'Commercial Security',
    short: 'Retail and hospitality-grade surveillance for high-footfall sites.',
    description:
      'Loss-prevention focused camera placement across checkout counters, stockrooms, and entrances, backed by long-retention recording for dispute resolution.',
    benefits: ['Checkout & till coverage', 'Crowd and queue monitoring', 'Extended footage retention', 'Multi-site dashboard'],
    features: ['4K checkout cameras', 'People-counting analytics', 'Cloud backup', 'Franchise-ready rollout'],
    // image: commercial,
  },
  {
    slug: 'industrial-security',
    icon: Factory,
    title: 'Industrial Security',
    short: 'Rugged surveillance for factories, plants, and warehouses.',
    description:
      'Wide-area coverage engineered for large industrial footprints — perimeter fencing, loading docks, production lines, and control rooms.',
    benefits: ['Perimeter intrusion detection', 'Thermal & low-light cameras', 'Loading dock monitoring', 'Control room integration'],
    features: ['IP66/67 rated hardware', 'Long-range PTZ', 'Centralised control room feed', 'Vibration-resistant mounts'],
    image: IndustrialSecurity,
  },
  {
    slug: 'networking',
    icon: Wifi,
    title: 'Networking & Cabling',
    short: 'Structured cabling and networking that keeps every camera online.',
    description:
      'End-to-end structured cabling, switch configuration, and network hardening so your surveillance and IT infrastructure run without dropouts.',
    benefits: ['Structured cable runs', 'Managed switch setup', 'Bandwidth optimisation', 'Redundant uplinks'],
    features: ['Cat6/Cat6A cabling', 'PoE switch configuration', 'VLAN segmentation', 'Rack & patch panel setup'],
    image: NetworkingCabling,
  },
  {
    slug: 'biometric',
    icon: Fingerprint,
    title: 'Biometric Attendance',
    short: 'Fingerprint and face-recognition access with attendance reporting.',
    description:
      'Replace manual registers with biometric terminals that log entry, exit, and attendance automatically — synced to payroll-ready reports.',
    benefits: ['Fingerprint & face recognition', 'Automated attendance reports', 'Shift and roster support', 'Access-level control'],
    features: ['Multi-terminal sync', 'Cloud attendance dashboard', 'Anti-spoofing sensors', 'Payroll export'],
    image: BiometricAttendance,
  },
  {
    slug: 'video-door-phone',
    icon: DoorOpen,
    title: 'Video Door Phone',
    short: 'See and speak to every visitor before opening the door.',
    description:
      'Video door phone systems for homes and offices with mobile app calling, remote unlock, and recorded visitor logs.',
    benefits: ['Two-way video calling', 'Remote unlock from phone', 'Visitor recording', 'Multi-unit apartment support'],
    features: ['Wi-Fi & wired options', 'Night-vision entry camera', 'Indoor monitor or app-only', 'Gate lock integration'],
    image: VideoDoorPhone,
  },
  {
    slug: 'amc',
    icon: Wrench,
    title: 'Annual Maintenance Contract',
    short: 'Scheduled servicing that keeps your system running at full strength.',
    description:
      'Preventive maintenance visits, firmware updates, and priority breakdown support so your surveillance investment stays reliable year-round.',
    benefits: ['Scheduled preventive visits', 'Priority breakdown support', 'Firmware & storage checks', 'Extended hardware warranty'],
    features: ['Quarterly health checks', 'Remote diagnostics', 'Discounted spare parts', 'Dedicated support line'],
    image: AnnualMaintenanceContract,
  },
];

export default services;
