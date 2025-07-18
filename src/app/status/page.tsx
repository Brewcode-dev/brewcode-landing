import { CheckCircle, AlertCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react'
import Button from '../../components/ui/Button';

export default function StatusPage() {
  const services = [
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2 months ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: '1 month ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastIncident: '3 months ago'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      lastIncident: 'Never'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '65ms',
      lastIncident: '2 months ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      lastIncident: '1 month ago'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'outage':
        return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20'
    }
  }

  return (
    <div className="min-h-screen bg-theme-background transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#ff4f19] mb-4 font-heading-poppins">
            Status Systemu
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-body-roboto">
            Monitoruj zdrowie i wydajność wszystkich naszych usług w czasie rzeczywistym
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-theme-surface shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-8 mb-8 border-4 border-[#ff4f19]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-heading-poppins">
              Ogólny Status Systemu
            </h2>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-green-600 dark:text-green-400 font-bold font-heading-poppins">
                Wszystkie Systemy Działają
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-theme-background border-2 border-[#ff4f19] shadow-[4px_4px_0px_0px_var(--theme-shadow)]">
              <Server className="w-8 h-8 text-[#ff4f19] mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-800 dark:text-white font-heading-poppins">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-body-roboto">Czas Działania</div>
            </div>
            <div className="text-center p-6 bg-theme-background border-2 border-[#ff4f19] shadow-[4px_4px_0px_0px_var(--theme-shadow)]">
              <Clock className="w-8 h-8 text-[#ff4f19] mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-800 dark:text-white font-heading-poppins">72ms</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-body-roboto">Średni Czas Odpowiedzi</div>
            </div>
            <div className="text-center p-6 bg-theme-background border-2 border-[#ff4f19] shadow-[4px_4px_0px_0px_var(--theme-shadow)]">
              <Shield className="w-8 h-8 text-[#ff4f19] mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-800 dark:text-white font-heading-poppins">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-body-roboto">Aktywne Problemy</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-theme-surface shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-6 border-4 border-[#ff4f19]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(service.status)}
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white font-heading-poppins">
                    {service.name}
                  </h3>
                </div>
                <span className={`px-3 py-1 text-xs font-bold ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1 font-body-roboto">Czas Działania</div>
                  <div className="font-bold text-gray-800 dark:text-white font-heading-poppins">{service.uptime}</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1 font-body-roboto">Czas Odpowiedzi</div>
                  <div className="font-bold text-gray-800 dark:text-white font-heading-poppins">{service.responseTime}</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1 font-body-roboto">Ostatni Incydent</div>
                  <div className="font-bold text-gray-800 dark:text-white font-heading-poppins">{service.lastIncident}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Incidents */}
        <div className="bg-theme-surface shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-8 mb-8 border-4 border-[#ff4f19]">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-heading-poppins">
            Ostatnie Incydenty
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white font-heading-poppins">
                    Wszystkie systemy działają
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-body-roboto">
                    Brak incydentów w ciągu ostatnich 30 dni
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-body-roboto">
                  Aktualne
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status History */}
        <div className="bg-theme-surface shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-8 border-4 border-[#ff4f19]">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-heading-poppins">
            Historia Statusu
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-heading-poppins">Data</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-heading-poppins">Usługa</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-heading-poppins">Status</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-heading-poppins">Czas Trwania</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 text-gray-800 dark:text-white font-body-roboto">2024-01-15</td>
                  <td className="py-3 text-gray-800 dark:text-white font-body-roboto">API Services</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs font-bold text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20">
                      Degraded
                    </span>
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-300 font-body-roboto">2 godziny</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-800 dark:text-white font-body-roboto">2024-01-10</td>
                  <td className="py-3 text-gray-800 dark:text-white font-body-roboto">Database</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/20">
                      Rozwiązane
                    </span>
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-300 font-body-roboto">30 minut</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 font-body-roboto">
            Potrzebujesz pomocy? Skontaktuj się z naszym zespołem wsparcia
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/support"
              className="inline-flex items-center px-6 py-3 bg-[#ff4f19] text-white border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 font-bold text-lg relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] font-heading-poppins"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              Kontakt Wsparcie
            </a>
            <a
              href="/wsparcie"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-[#ff4f19] border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 font-bold text-lg relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] font-heading-poppins"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              Wsparcie
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 