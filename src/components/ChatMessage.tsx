import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  responses?: {
    [key: string]: string;
  };
}

interface ChatMessageProps {
  message: Message;
  selectedLanguages: string[];
}

const LANGUAGE_INFO = {
  english: { name: 'English', flag: '🇺🇸', nativeName: 'English' },
  hindi: { name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  telugu: { name: 'Telugu', flag: '🇹🇱', nativeName: 'తెలుగు' },
};

export const ChatMessage = ({ message, selectedLanguages }: ChatMessageProps) => {
  if (message.isUser) {
    return (
      <div className="flex justify-end">
        <Card className="p-4 max-w-lg gradient-spiritual text-white shadow-divine">
          <p className="text-sm">{message.text}</p>
        </Card>
      </div>
    );
  }

  // Bot message with multiple language responses
  if (message.responses) {
    const availableLanguages = selectedLanguages.filter(lang => message.responses![lang]);
    
    if (availableLanguages.length === 1) {
      // Single language - show as simple card
      const lang = availableLanguages[0];
      const langInfo = LANGUAGE_INFO[lang as keyof typeof LANGUAGE_INFO];
      
      return (
        <div className="flex justify-start">
          <Card className="p-6 max-w-2xl shadow-gentle border-l-4 border-l-primary">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                <span className="mr-1">{langInfo.flag}</span>
                Response in {langInfo.nativeName}
              </Badge>
            </div>
            <p className="leading-relaxed">{message.responses[lang]}</p>
          </Card>
        </div>
      );
    }
    
    // Multiple languages - show as tabs
    return (
      <div className="flex justify-start">
        <Card className="p-6 max-w-3xl shadow-gentle border-l-4 border-l-primary">
          <Tabs defaultValue={availableLanguages[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              {availableLanguages.map((lang) => {
                const langInfo = LANGUAGE_INFO[lang as keyof typeof LANGUAGE_INFO];
                return (
                  <TabsTrigger 
                    key={lang} 
                    value={lang}
                    className="text-xs data-[state=active]:gradient-spiritual data-[state=active]:text-white"
                  >
                    <span className="mr-1">{langInfo.flag}</span>
                    {langInfo.nativeName}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {availableLanguages.map((lang) => (
              <TabsContent key={lang} value={lang} className="mt-0">
                <p className="leading-relaxed">{message.responses![lang]}</p>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    );
  }

  // Fallback for simple bot messages
  return (
    <div className="flex justify-start">
      <Card className="p-4 max-w-lg shadow-gentle">
        <p className="text-sm">{message.text}</p>
      </Card>
    </div>
  );
};