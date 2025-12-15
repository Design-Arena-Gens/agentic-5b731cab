"use client";

import { useState } from "react";
import {
  Search,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  Mail,
  Phone,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";

interface Lead {
  id: string;
  company: string;
  industry: string;
  contact: string;
  email: string;
  phone: string;
  score: number;
  status: "researching" | "qualified" | "contacted" | "engaged" | "meeting_scheduled";
  lastActivity: string;
  notes: string;
  revenue: string;
  employees: string;
}

interface Message {
  id: string;
  leadId: string;
  type: "email" | "linkedin" | "phone";
  content: string;
  timestamp: string;
  response?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "leads" | "outreach" | "analytics">(
    "dashboard"
  );
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isResearching, setIsResearching] = useState(false);
  const [targetCompany, setTargetCompany] = useState("");
  const [targetIndustry, setTargetIndustry] = useState("");

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "1",
      company: "TechFlow Solutions",
      industry: "SaaS",
      contact: "Sarah Chen",
      email: "sarah.chen@techflow.io",
      phone: "+1 (555) 123-4567",
      score: 92,
      status: "engaged",
      lastActivity: "2 hours ago",
      notes: "Interested in enterprise package. Budget approved for Q1.",
      revenue: "$5M-$10M",
      employees: "50-100",
    },
    {
      id: "2",
      company: "DataCore Systems",
      industry: "Data Analytics",
      contact: "Michael Roberts",
      email: "m.roberts@datacore.com",
      phone: "+1 (555) 234-5678",
      score: 85,
      status: "contacted",
      lastActivity: "1 day ago",
      notes: "Follow-up scheduled for next week. Comparing with competitors.",
      revenue: "$10M-$25M",
      employees: "100-250",
    },
    {
      id: "3",
      company: "CloudScale Inc",
      industry: "Cloud Infrastructure",
      contact: "Jennifer Martinez",
      email: "j.martinez@cloudscale.com",
      phone: "+1 (555) 345-6789",
      score: 88,
      status: "meeting_scheduled",
      lastActivity: "3 hours ago",
      notes: "Demo meeting scheduled for Friday 2pm EST.",
      revenue: "$25M-$50M",
      employees: "250-500",
    },
    {
      id: "4",
      company: "InnovateLabs",
      industry: "Product Development",
      contact: "David Kim",
      email: "david.k@innovatelabs.io",
      phone: "+1 (555) 456-7890",
      score: 78,
      status: "qualified",
      lastActivity: "5 hours ago",
      notes: "Good fit profile. Waiting for introduction from mutual connection.",
      revenue: "$1M-$5M",
      employees: "20-50",
    },
  ]);

  const [messages] = useState<Message[]>([
    {
      id: "1",
      leadId: "1",
      type: "email",
      content:
        "Hi Sarah,\n\nI noticed TechFlow Solutions recently expanded to 3 new markets. Congratulations on the growth!\n\nI'm reaching out because we help SaaS companies like yours scale their customer operations efficiently. We've helped similar companies reduce support costs by 40% while improving response times.\n\nWould you be open to a 15-minute call next week to explore if we could help TechFlow achieve similar results?\n\nBest regards,\nAI Sales Agent",
      timestamp: "2 days ago",
      response:
        "Thanks for reaching out! We're definitely interested. Can we schedule for Thursday?",
    },
    {
      id: "2",
      leadId: "2",
      type: "linkedin",
      content:
        "Hi Michael,\n\nI saw your post about DataCore's new analytics platform launch. The focus on real-time processing is impressive.\n\nWe specialize in helping data analytics companies scale their infrastructure efficiently. I'd love to share how we've helped companies in your space reduce their cloud costs by 35%.\n\nOpen to a brief conversation?\n\nBest,\nAI Sales Agent",
      timestamp: "3 days ago",
    },
  ]);

  const handleResearch = async () => {
    setIsResearching(true);
    setTimeout(() => {
      const newLead: Lead = {
        id: String(leads.length + 1),
        company: targetCompany || "New Prospect Corp",
        industry: targetIndustry || "Technology",
        contact: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 999-8888",
        score: Math.floor(Math.random() * 30) + 70,
        status: "qualified",
        lastActivity: "Just now",
        notes: "AI-researched lead. Strong signals: recent funding, hiring SDRs, tech stack matches ICP.",
        revenue: "$5M-$10M",
        employees: "50-100",
      };
      setLeads([newLead, ...leads]);
      setIsResearching(false);
      setTargetCompany("");
      setTargetIndustry("");
    }, 2000);
  };

  const getStatusColor = (status: Lead["status"]) => {
    const colors = {
      researching: "bg-gray-500",
      qualified: "bg-blue-500",
      contacted: "bg-yellow-500",
      engaged: "bg-orange-500",
      meeting_scheduled: "bg-green-500",
    };
    return colors[status];
  };

  const getStatusLabel = (status: Lead["status"]) => {
    const labels = {
      researching: "Researching",
      qualified: "Qualified",
      contacted: "Contacted",
      engaged: "Engaged",
      meeting_scheduled: "Meeting Set",
    };
    return labels[status];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">B2B Sales Agent</h1>
                <p className="text-xs text-gray-400">AI-Powered Lead Generation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Active Leads</p>
                <p className="text-xl font-bold text-white">{leads.length}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">This Month</p>
                <p className="text-xl font-bold text-green-400">12 Meetings</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "dashboard", label: "Dashboard", icon: Target },
              { id: "leads", label: "Leads", icon: Users },
              { id: "outreach", label: "Outreach", icon: MessageSquare },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors ${
                  activeTab === id
                    ? "border-purple-500 text-white"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Leads Qualified", value: "24", change: "+12%", icon: CheckCircle, color: "green" },
                { label: "Meetings Booked", value: "12", change: "+8%", icon: Clock, color: "blue" },
                { label: "Outreach Sent", value: "156", change: "+24%", icon: Mail, color: "purple" },
                { label: "Pipeline Value", value: "$480K", change: "+18%", icon: DollarSign, color: "yellow" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                    <span className={`text-sm font-medium text-${stat.color}-400`}>{stat.change}</span>
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Research Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                AI Lead Research
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Target company name..."
                  value={targetCompany}
                  onChange={(e) => setTargetCompany(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="text"
                  placeholder="Industry or vertical..."
                  value={targetIndustry}
                  onChange={(e) => setTargetIndustry(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleResearch}
                  disabled={isResearching}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-6 py-3 font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
                >
                  {isResearching ? "Researching..." : "Research & Qualify"}
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p>AI will research company data, tech stack, recent news, hiring patterns, and decision makers.</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {leads.slice(0, 4).map((lead) => (
                  <div
                    key={lead.id}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedLead(lead);
                      setActiveTab("leads");
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {lead.company[0]}
                      </div>
                      <div>
                        <p className="font-medium text-white">{lead.company}</p>
                        <p className="text-sm text-gray-400">
                          {lead.contact} · {lead.lastActivity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                          lead.status
                        )}`}
                      >
                        {getStatusLabel(lead.status)}
                      </span>
                      <span className="text-sm font-bold text-white">Score: {lead.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "leads" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Leads List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">All Leads</h2>
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className={`bg-white/5 backdrop-blur-sm border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedLead?.id === lead.id
                      ? "border-purple-500 bg-white/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setSelectedLead(lead)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {lead.company[0]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{lead.company}</h3>
                        <p className="text-sm text-gray-400">{lead.industry}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>{lead.revenue} revenue</span>
                          <span>{lead.employees} employees</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{lead.score}</div>
                      <div className="text-xs text-gray-400">Lead Score</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {getStatusLabel(lead.status)}
                    </span>
                    <span className="text-sm text-gray-400">{lead.lastActivity}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      {lead.contact}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2" />
                      {lead.email}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-2" />
                      {lead.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lead Detail Panel */}
            <div className="lg:col-span-1">
              {selectedLead ? (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sticky top-4">
                  <h3 className="text-xl font-bold text-white mb-4">Lead Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Company</p>
                      <p className="text-white font-medium">{selectedLead.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Contact</p>
                      <p className="text-white font-medium">{selectedLead.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Status</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                          selectedLead.status
                        )}`}
                      >
                        {getStatusLabel(selectedLead.status)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Lead Score</p>
                      <div className="flex items-center">
                        <div className="flex-1 bg-white/10 rounded-full h-2 mr-3">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${selectedLead.score}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-bold">{selectedLead.score}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Notes</p>
                      <p className="text-white text-sm">{selectedLead.notes}</p>
                    </div>
                    <div className="pt-4 space-y-2">
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-4 py-2 font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                        Generate Outreach
                      </button>
                      <button className="w-full bg-white/10 text-white rounded-lg px-4 py-2 font-medium hover:bg-white/20 transition-all">
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">Select a lead to view details</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "outreach" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Outreach Messages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {messages.map((message) => {
                const lead = leads.find((l) => l.id === message.leadId);
                return (
                  <div
                    key={message.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {lead?.company[0]}
                        </div>
                        <div>
                          <p className="font-medium text-white">{lead?.company}</p>
                          <p className="text-xs text-gray-400">{lead?.contact}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {message.type === "email" && <Mail className="w-4 h-4 text-blue-400" />}
                        {message.type === "linkedin" && <MessageSquare className="w-4 h-4 text-purple-400" />}
                        {message.type === "phone" && <Phone className="w-4 h-4 text-green-400" />}
                        <span className="text-xs text-gray-400">{message.timestamp}</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 mb-3">
                      <p className="text-sm text-gray-300 whitespace-pre-line">{message.content}</p>
                    </div>
                    {message.response && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <p className="text-xs text-green-400 font-medium mb-2">Response:</p>
                        <p className="text-sm text-gray-300">{message.response}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Lead Funnel</h3>
                <div className="space-y-3">
                  {[
                    { stage: "Researched", count: 156, percentage: 100 },
                    { stage: "Qualified", count: 94, percentage: 60 },
                    { stage: "Contacted", count: 62, percentage: 40 },
                    { stage: "Engaged", count: 38, percentage: 24 },
                    { stage: "Meeting Set", count: 12, percentage: 8 },
                  ].map((item) => (
                    <div key={item.stage}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{item.stage}</span>
                        <span className="text-sm font-bold text-white">{item.count}</span>
                      </div>
                      <div className="bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Response Rates</h3>
                <div className="space-y-4">
                  {[
                    { channel: "Email", sent: 89, responded: 34, rate: 38 },
                    { channel: "LinkedIn", sent: 52, responded: 23, rate: 44 },
                    { channel: "Phone", sent: 15, responded: 8, rate: 53 },
                  ].map((item) => (
                    <div key={item.channel}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">{item.channel}</span>
                        <span className="text-sm text-gray-400">
                          {item.responded}/{item.sent} ({item.rate}%)
                        </span>
                      </div>
                      <div className="bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${item.rate}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Top Industries</h3>
                <div className="space-y-3">
                  {[
                    { industry: "SaaS", leads: 42, value: "$180K" },
                    { industry: "Data Analytics", leads: 28, value: "$140K" },
                    { industry: "Cloud Infrastructure", leads: 24, value: "$160K" },
                    { industry: "FinTech", leads: 18, value: "$95K" },
                  ].map((item) => (
                    <div key={item.industry} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{item.industry}</p>
                        <p className="text-xs text-gray-400">{item.leads} leads</p>
                      </div>
                      <p className="text-green-400 font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">AI Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-300">Time Saved</p>
                      <p className="text-2xl font-bold text-white">124 hours</p>
                    </div>
                    <Clock className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-300">Cost Savings</p>
                      <p className="text-2xl font-bold text-white">$15,800</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-300">Meetings Booked</p>
                      <p className="text-2xl font-bold text-white">12 this month</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">What the AI Does</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Lead Research",
                    description: "Scrapes company data, tech stack, funding, hiring signals, and decision makers",
                    icon: Search,
                  },
                  {
                    title: "Qualification",
                    description: "Scores leads based on ICP fit, buying signals, and company health metrics",
                    icon: Target,
                  },
                  {
                    title: "Personalization",
                    description: "Crafts custom outreach based on recent news, pain points, and company context",
                    icon: MessageSquare,
                  },
                  {
                    title: "Follow-ups",
                    description: "Automatically follows up at optimal times, tracks engagement, books meetings",
                    icon: TrendingUp,
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <item.icon className="w-8 h-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-medium mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
