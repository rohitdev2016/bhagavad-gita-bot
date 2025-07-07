import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild size="sm">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <span className="om-symbol">ॐ</span>
              <h1 className="text-xl font-cinzel font-bold gradient-spiritual bg-clip-text text-transparent">
                Gītā Wisdom
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold mb-4 gradient-spiritual bg-clip-text text-transparent">
            About the Bhagavad Gītā
          </h2>
          <p className="text-xl text-muted-foreground">
            Timeless wisdom for modern seekers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-gentle">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-cinzel font-semibold mb-3">Sacred Text</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Bhagavad Gītā is a 700-verse Hindu scripture that forms part of the epic Mahabharata. 
              It presents a conversation between Prince Arjuna and Lord Krishna, who serves as his 
              charioteer and spiritual guide.
            </p>
          </Card>

          <Card className="p-8 shadow-gentle">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-cinzel font-semibold mb-3">Universal Teachings</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Gītā addresses fundamental questions about duty, righteousness, and the nature of reality. 
              Its teachings on karma, dharma, and spiritual liberation remain relevant across cultures and centuries.
            </p>
          </Card>
        </div>

        <Card className="p-8 mb-12 gradient-sacred text-white shadow-sacred">
          <h3 className="text-2xl font-cinzel font-semibold mb-4 text-center">Core Teachings</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">⚖️</div>
              <h4 className="font-semibold mb-2">Dharma</h4>
              <p className="text-sm text-secondary-foreground/90">
                Righteous duty and moral law
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Karma</h4>
              <p className="text-sm text-secondary-foreground/90">
                Action without attachment to results
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🕉️</div>
              <h4 className="font-semibold mb-2">Moksha</h4>
              <p className="text-sm text-secondary-foreground/90">
                Liberation from the cycle of rebirth
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-12 shadow-gentle">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-cinzel font-semibold mb-3">For Everyone</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While rooted in Hindu tradition, the Gītā's teachings transcend religious boundaries. 
            It offers practical wisdom for anyone seeking guidance on:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Making difficult life decisions</li>
            <li>Finding purpose and meaning</li>
            <li>Managing stress and anxiety</li>
            <li>Understanding duty and responsibility</li>
            <li>Developing inner peace and wisdom</li>
          </ul>
        </Card>

        <Card className="p-8 mb-8 border-primary/20 bg-primary/5">
          <h3 className="text-xl font-cinzel font-semibold mb-3">Usage & Sources</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This chatbot draws from authentic translations and commentaries of the Bhagavad Gītā, 
            including works by renowned spiritual teachers and scholars. The multilingual responses 
            help make these ancient teachings accessible to diverse audiences.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a spiritual guidance tool and should not replace 
            professional counseling for serious personal issues.
          </p>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="gradient-spiritual shadow-divine">
            <Link to="/chat">
              Start Your Spiritual Journey
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          Made with 📖 by a seeker of truth
        </p>
      </footer>
    </div>
  );
};

export default About;