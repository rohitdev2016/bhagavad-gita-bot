import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageSquare, Heart, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-spiritual.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="om-symbol">ॐ</span>
            <h1 className="text-2xl font-cinzel font-bold gradient-spiritual bg-clip-text text-transparent">
              Gītā Wisdom
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={heroImage} 
              alt="Spiritual Wisdom" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-sacred transition-divine hover:scale-105"
            />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold mb-6 gradient-spiritual bg-clip-text text-transparent">
            Find Answers in the Bhagavad Gītā
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Seek guidance from timeless wisdom. Ask questions about life, duty, and purpose, 
            and receive answers rooted in the sacred teachings of the Gītā.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-spiritual shadow-divine transition-divine hover:shadow-sacred text-lg px-8 py-6">
              <Link to="/chat">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6">
              <Link to="/about">
                <BookOpen className="mr-2 h-5 w-5" />
                About the Gītā
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center gradient-sacred text-white shadow-gentle transition-divine hover:shadow-divine hover:scale-105">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
            <h3 className="text-xl font-cinzel font-semibold mb-3">Personal Guidance</h3>
            <p className="text-secondary-foreground/90">
              Ask about life challenges and receive compassionate, verse-based wisdom
            </p>
          </Card>
          
          <Card className="p-8 text-center shadow-gentle transition-divine hover:shadow-divine hover:scale-105">
            <div className="text-2xl mb-4">🇮🇳 🇺🇸 🇹🇱</div>
            <h3 className="text-xl font-cinzel font-semibold mb-3">Multi-Language</h3>
            <p className="text-muted-foreground">
              Read responses in Telugu, Hindi, and English - choose one or all
            </p>
          </Card>
          
          <Card className="p-8 text-center gradient-divine shadow-gentle transition-divine hover:shadow-sacred hover:scale-105">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-cinzel font-semibold mb-3 text-secondary">Ancient Wisdom</h3>
            <p className="text-secondary/80">
              Every answer is rooted in the timeless teachings of the Bhagavad Gītā
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-cinzel font-bold mb-4">
            Ready to Seek Wisdom?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're facing difficult decisions, seeking life direction, or curious about 
            spiritual teachings, the Gītā has guidance for you.
          </p>
          <Button asChild size="lg" className="gradient-spiritual shadow-divine text-lg px-8 py-6">
            <Link to="/chat">
              Begin Your Journey
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          Made with 📖 by a seeker of truth
        </p>
      </footer>
    </div>
  );
};

export default Home;