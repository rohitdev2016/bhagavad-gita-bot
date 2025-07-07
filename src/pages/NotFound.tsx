import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🕉️</div>
        <h1 className="text-4xl font-cinzel font-bold mb-4 gradient-spiritual bg-clip-text text-transparent">
          Path Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          The path you seek does not exist in our spiritual realm
        </p>
        <Button asChild className="gradient-spiritual shadow-divine">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Light
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
