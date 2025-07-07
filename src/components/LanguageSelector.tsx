import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: 'english', name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'hindi', name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  { code: 'telugu', name: 'Telugu', flag: '🇹🇱', nativeName: 'తెలుగు' },
];

interface LanguageSelectorProps {
  selectedLanguages: string[];
  onLanguageChange: (languages: string[]) => void;
}

export const LanguageSelector = ({ selectedLanguages, onLanguageChange }: LanguageSelectorProps) => {
  const toggleLanguage = (languageCode: string) => {
    if (selectedLanguages.includes(languageCode)) {
      onLanguageChange(selectedLanguages.filter(lang => lang !== languageCode));
    } else {
      onLanguageChange([...selectedLanguages, languageCode]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Choose the languages you want to receive your Gītā wisdom in
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        {LANGUAGES.map((language) => {
          const isSelected = selectedLanguages.includes(language.code);
          
          return (
            <Button
              key={language.code}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => toggleLanguage(language.code)}
              className={`
                relative transition-divine
                ${isSelected 
                  ? 'gradient-spiritual shadow-divine text-white border-0' 
                  : 'border-primary/20 hover:bg-primary/5 hover:border-primary/40'
                }
              `}
            >
              <span className="mr-2 text-base">{language.flag}</span>
              <span className="font-medium">{language.nativeName}</span>
              {isSelected && (
                <Check className="ml-2 h-3 w-3" />
              )}
            </Button>
          );
        })}
      </div>
      
      {selectedLanguages.length > 0 && (
        <div className="text-center">
          <Badge variant="secondary" className="text-xs">
            {selectedLanguages.length} language{selectedLanguages.length > 1 ? 's' : ''} selected
          </Badge>
        </div>
      )}
    </div>
  );
};