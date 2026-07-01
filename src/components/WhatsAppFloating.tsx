import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Check } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Trigger iOS notification preview after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setShowNotification(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotification(false);
    setHasOpened(true);
  };

  const handleCloseChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleCloseNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotification(false);
  };

  const handleSendMessage = () => {
    const message = encodeURIComponent("Halo BaleHost, saya tertarik untuk membuat website profesional!");
    window.open(`https://wa.me/628123456789?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none pointer-events-auto">
      
      {/* iOS-style Banner Notification Preview */}
      {showNotification && !isOpen && (
        <div 
          onClick={handleOpenChat}
          className="absolute bottom-16 right-0 w-[280px] sm:w-[320px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-3.5 transition-all duration-500 hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom-5"
          id="wa-notification"
        >
          {/* Close button */}
          <button 
            onClick={handleCloseNotification}
            className="absolute top-2.5 right-2.5 p-1 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
          >
            <X className="w-3 h-3 text-black/40" />
          </button>

          {/* iOS Notification Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-md bg-[#25D366] flex items-center justify-center shadow-xs">
              <MessageCircle className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="text-[10px] font-semibold text-black/50 uppercase tracking-wider">WHATSAPP</span>
            <span className="text-[10px] text-black/40 ml-auto mr-4">baru saja</span>
          </div>

          {/* Notification Body */}
          <div className="flex items-start gap-3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="BaleHost Support" 
                className="w-9 h-9 rounded-full object-cover border border-white shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-neutral-800">BaleHost Support</h4>
              <p className="text-xs text-neutral-600 line-clamp-2 mt-0.5">
                Halo! Ada yang bisa kami bantu mengenai pembuatan website Anda? 🌴
              </p>
            </div>
          </div>
        </div>
      )}

      {/* iOS-style Interactive Chat Box Window */}
      {isOpen && (
        <div 
          className="absolute bottom-0 right-0 w-[310px] sm:w-[350px] bg-[#F4F4F9]/90 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-200"
          id="wa-chat-box"
        >
          {/* Chat Header (iOS Navigation Bar look) */}
          <div className="bg-gradient-to-r from-[#0C1446] to-[#1E308F] p-4 text-white relative">
            <button 
              onClick={handleCloseChat}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120" 
                  alt="Customer Support" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm leading-tight">BaleHost Support</h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-white/70">Online • Siap membantu</p>
              </div>
            </div>
          </div>

          {/* Chat Body (iMessage / WhatsApp-style background with grid pattern) */}
          <div className="h-[200px] overflow-y-auto p-4 space-y-3.5 bg-[#E5DDD5] bg-[radial-gradient(#C4B5A5_0.5px,transparent_0.5px)] [background-size:12px_12px] [background-position:0_0]">
            
            {/* Timestamp */}
            <div className="text-center">
              <span className="inline-block bg-black/10 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full font-mono uppercase">
                Hari ini
              </span>
            </div>

            {/* Inbound Agent Message */}
            <div className="flex items-start gap-2 max-w-[85%] animate-in slide-in-from-left-2">
              <div className="bg-white text-neutral-800 text-xs py-2 px-3.5 rounded-2xl rounded-tl-sm shadow-xs relative">
                <p className="leading-relaxed">
                  Halo! Selamat datang di BaleHost Nusa Penida. 🌴
                </p>
                <p className="leading-relaxed mt-1">
                  Butuh website profesional, cepat, & meningkatkan pesanan langsung? Beritahu kami kebutuhan Anda sekarang!
                </p>
                <span className="block text-[8px] text-neutral-400 text-right mt-1 font-mono flex items-center justify-end gap-0.5">
                  09.00 <Check className="w-2.5 h-2.5 text-blue-500" />
                </span>
              </div>
            </div>

            {/* Prompt Quick Response options */}
            <div className="space-y-1.5 pt-2 flex flex-col items-end">
              <button 
                onClick={handleSendMessage}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs py-1.5 px-3 rounded-full font-semibold shadow-sm transition-colors cursor-pointer text-right max-w-[90%]"
              >
                "Mau tanya paket landing page"
              </button>
              <button 
                onClick={handleSendMessage}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs py-1.5 px-3 rounded-full font-semibold shadow-sm transition-colors cursor-pointer text-right max-w-[90%]"
              >
                "Konsultasi gratis desain website"
              </button>
            </div>

          </div>

          {/* Chat Input (iOS Quick Chat Bar style) */}
          <div className="p-3 bg-white/90 backdrop-blur-md border-t border-black/5 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Tulis pesan ke WhatsApp..."
              readOnly
              onClick={handleSendMessage}
              className="flex-1 bg-neutral-100 border border-neutral-200 rounded-full py-2 px-4 text-xs text-neutral-700 placeholder-neutral-400 focus:outline-none cursor-pointer"
            />
            <button 
              onClick={handleSendMessage}
              className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-md transition-all cursor-pointer flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5 fill-white ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Main iOS Button Trigger */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer relative group"
          id="wa-trigger"
        >
          {/* Active green ring radar */}
          <span className="absolute -inset-0.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 text-white fill-white transition-transform duration-300 group-hover:scale-110" />

          {/* iOS Notification Badge Count */}
          {showNotification && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
              1
            </span>
          )}
        </button>
      )}

    </div>
  );
}
