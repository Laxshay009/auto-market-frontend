export const themeConfigs = {
  option4: {
    name: "Luxury Elite",
    description: "Sophisticated elegance with premium feel",
    light: {
      primary: "#D4AF37", // Gold
      secondary: "#0A0A0A", // Black
      accent: "#C0C0C0", // Silver
      background: "#F8F6F0", // Pearl
      surface: "#FFFFFF",
      text: "#0A0A0A",
      textSecondary: "#4A4A4A",
      border: "rgba(212, 175, 55, 0.2)",
      shadow: "rgba(0, 0, 0, 0.1)",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #CD7F32 100%)",
      glassMorphism: {
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(212, 175, 55, 0.2)"
      }
    },
    dark: {
      primary: "#D4AF37", // Gold
      secondary: "#F8F6F0", // Pearl
      accent: "#CD7F32", // Bronze
      background: "#0A0A0A", // Black
      surface: "#1A1A1A",
      text: "#F8F6F0",
      textSecondary: "#C0C0C0",
      border: "rgba(212, 175, 55, 0.3)",
      shadow: "rgba(212, 175, 55, 0.2)",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #CD7F32 100%)",
      glassMorphism: {
        background: "rgba(26, 26, 26, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(212, 175, 55, 0.3)"
      }
    },
    typography: {
      fontSerif: "'Playfair Display', serif",
      fontSans: "'Inter', sans-serif",
      headingSize: {
        h1: "clamp(2.5rem, 5vw, 4rem)",
        h2: "clamp(2rem, 4vw, 3rem)",
        h3: "clamp(1.5rem, 3vw, 2rem)"
      }
    },
    animations: {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      hover: "transform 0.3s ease, box-shadow 0.3s ease",
      entrance: "fadeInUp 0.6s ease-out"
    }
  },
  option5: {
    name: "Cyberpunk",
    description: "Futuristic tech-forward design",
    light: {
      primary: "#00D4FF", // Neon Blue
      secondary: "#9945FF", // Purple
      accent: "#FF006E", // Pink
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#1A1A1A",
      textSecondary: "#4A4A4A",
      border: "rgba(0, 212, 255, 0.3)",
      shadow: "rgba(153, 69, 255, 0.2)",
      gradient: "linear-gradient(135deg, #00D4FF 0%, #9945FF 100%)",
      neonGlow: "0 0 20px rgba(0, 212, 255, 0.5)",
      glassMorphism: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 212, 255, 0.3)"
      }
    },
    dark: {
      primary: "#00D4FF", // Neon Blue
      secondary: "#FF006E", // Neon Pink
      accent: "#9945FF", // Purple
      background: "#000000",
      surface: "#0A0A0A",
      text: "#FFFFFF",
      textSecondary: "#B0B0B0",
      border: "rgba(0, 212, 255, 0.5)",
      shadow: "rgba(255, 0, 110, 0.3)",
      gradient: "linear-gradient(135deg, #00D4FF 0%, #FF006E 100%)",
      neonGlow: "0 0 30px rgba(0, 212, 255, 0.7)",
      glassMorphism: {
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 212, 255, 0.5)"
      }
    },
    typography: {
      fontSerif: "'Orbitron', monospace",
      fontSans: "'Rajdhani', sans-serif",
      headingSize: {
        h1: "clamp(3rem, 6vw, 5rem)",
        h2: "clamp(2.5rem, 5vw, 3.5rem)",
        h3: "clamp(2rem, 4vw, 2.5rem)"
      }
    },
    animations: {
      transition: "all 0.2s linear",
      hover: "transform 0.2s ease, box-shadow 0.2s ease",
      glitch: "glitch 0.3s infinite",
      neon: "neonPulse 2s infinite"
    }
  },
  option6: {
    name: "Modern Happening",
    description: "Vibrant, trendy, and social",
    light: {
      primary: "#0066FF", // Vibrant Blue
      secondary: "#FF6B35", // Orange
      accent: "#00D084", // Green
      tertiary: "#FFD93D", // Yellow
      background: "#FFFFFF",
      surface: "#F8F9FA",
      text: "#212529",
      textSecondary: "#6C757D",
      border: "rgba(0, 102, 255, 0.2)",
      shadow: "rgba(0, 0, 0, 0.08)",
      gradient: "linear-gradient(135deg, #0066FF 0%, #FF6B35 50%, #00D084 100%)",
      glassMorphism: {
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(0, 102, 255, 0.2)"
      }
    },
    dark: {
      primary: "#4D9FFF", // Electric Blue
      secondary: "#FF006E", // Hot Pink
      accent: "#9D4EDD", // Purple
      tertiary: "#FBFF12", // Neon Yellow
      background: "#1A1A2E",
      surface: "#16213E",
      text: "#FFFFFF",
      textSecondary: "#A8A8A8",
      border: "rgba(77, 159, 255, 0.3)",
      shadow: "rgba(255, 0, 110, 0.2)",
      gradient: "linear-gradient(135deg, #4D9FFF 0%, #FF006E 50%, #9D4EDD 100%)",
      glassMorphism: {
        background: "rgba(26, 26, 46, 0.9)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(77, 159, 255, 0.3)"
      }
    },
    typography: {
      fontSerif: "'Poppins', sans-serif",
      fontSans: "'Montserrat', sans-serif",
      headingSize: {
        h1: "clamp(2.5rem, 5vw, 4.5rem)",
        h2: "clamp(2rem, 4vw, 3rem)",
        h3: "clamp(1.5rem, 3vw, 2rem)"
      }
    },
    animations: {
      transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      hover: "transform 0.4s ease, box-shadow 0.4s ease",
      bounce: "bounce 1s infinite",
      slide: "slideIn 0.5s ease-out"
    }
  },
  option7: {
    name: "Simple Shuttle",
    description: "Minimalist, clean, and functional",
    light: {
      primary: "#4A90E2", // Soft Blue
      secondary: "#7B8894", // Gray
      accent: "#50C878", // Emerald
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#333333",
      textSecondary: "#666666",
      border: "#E0E0E0",
      shadow: "rgba(0, 0, 0, 0.05)",
      gradient: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",
      glassMorphism: {
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        border: "1px solid #E0E0E0"
      }
    },
    dark: {
      primary: "#5A7FA6", // Muted Blue
      secondary: "#8A95A1", // Cool Gray
      accent: "#6B9E78", // Sage Green
      background: "#1F1F1F",
      surface: "#2C2C2C",
      text: "#E0E0E0",
      textSecondary: "#A0A0A0",
      border: "#404040",
      shadow: "rgba(0, 0, 0, 0.3)",
      gradient: "linear-gradient(180deg, #2C2C2C 0%, #1F1F1F 100%)",
      glassMorphism: {
        background: "rgba(44, 44, 44, 0.95)",
        backdropFilter: "blur(4px)",
        border: "1px solid #404040"
      }
    },
    typography: {
      fontSerif: "'Roboto', sans-serif",
      fontSans: "'Open Sans', sans-serif",
      headingSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1.25rem"
      }
    },
    animations: {
      transition: "all 0.2s ease",
      hover: "opacity 0.2s ease",
      entrance: "fadeIn 0.3s ease"
    }
  },
  option8: {
    name: "Luxurious",
    description: "Opulent, exclusive, and refined",
    light: {
      primary: "#D4AF37", // Champagne Gold
      secondary: "#E8B4B8", // Rose Gold
      accent: "#6B4423", // Cognac
      background: "#FFF8F0", // Cream
      surface: "#FFFEF9",
      text: "#2C1810",
      textSecondary: "#5D4E37",
      border: "rgba(212, 175, 55, 0.15)",
      shadow: "rgba(107, 68, 35, 0.1)",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #E8B4B8 50%, #F8F6F0 100%)",
      glassMorphism: {
        background: "rgba(255, 248, 240, 0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(212, 175, 55, 0.2)"
      }
    },
    dark: {
      primary: "#B8860B", // Antique Gold
      secondary: "#800020", // Burgundy
      accent: "#E5E4E2", // Platinum
      background: "#0F0F1E", // Midnight
      surface: "#1A1A2E",
      text: "#F8F6F0",
      textSecondary: "#D4AF37",
      border: "rgba(184, 134, 11, 0.3)",
      shadow: "rgba(212, 175, 55, 0.3)",
      gradient: "linear-gradient(135deg, #B8860B 0%, #800020 50%, #0F0F1E 100%)",
      glassMorphism: {
        background: "rgba(15, 15, 30, 0.9)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(184, 134, 11, 0.3)"
      }
    },
    typography: {
      fontSerif: "'Didot', 'Bodoni MT', serif",
      fontSans: "'Futura', sans-serif",
      headingSize: {
        h1: "clamp(3rem, 6vw, 5rem)",
        h2: "clamp(2.5rem, 5vw, 3.5rem)",
        h3: "clamp(2rem, 4vw, 2.5rem)"
      }
    },
    animations: {
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      hover: "transform 0.5s ease, box-shadow 0.5s ease",
      shimmer: "shimmer 3s infinite",
      entrance: "fadeInScale 0.8s ease-out"
    }
  },
  option9: {
    name: "Premium",
    description: "Professional, sophisticated, and trustworthy",
    light: {
      primary: "#003366", // Corporate Blue
      secondary: "#C0C0C0", // Silver
      accent: "#FFD700", // Gold
      background: "#FFFFFF",
      surface: "#FAFAFA",
      text: "#1A1A1A",
      textSecondary: "#6C757D",
      border: "#DEE2E6",
      shadow: "rgba(0, 0, 0, 0.06)",
      gradient: "linear-gradient(135deg, #003366 0%, #004080 100%)",
      glassMorphism: {
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(6px)",
        border: "1px solid #DEE2E6"
      }
    },
    dark: {
      primary: "#001F3F", // Navy
      secondary: "#41464B", // Graphite
      accent: "#71797E", // Metallic
      background: "#1C1C1C", // Dark Slate
      surface: "#252525",
      text: "#FFFFFF",
      textSecondary: "#B8BCC0",
      border: "#404040",
      shadow: "rgba(113, 121, 126, 0.2)",
      gradient: "linear-gradient(135deg, #001F3F 0%, #2F4F4F 100%)",
      glassMorphism: {
        background: "rgba(28, 28, 28, 0.98)",
        backdropFilter: "blur(6px)",
        border: "1px solid #404040"
      }
    },
    typography: {
      fontSerif: "'Merriweather', serif",
      fontSans: "'Helvetica Neue', 'Arial', sans-serif",
      headingSize: {
        h1: "clamp(2.25rem, 4vw, 3.5rem)",
        h2: "clamp(1.875rem, 3vw, 2.5rem)",
        h3: "clamp(1.5rem, 2.5vw, 2rem)"
      }
    },
    animations: {
      transition: "all 0.3s ease",
      hover: "transform 0.3s ease, box-shadow 0.3s ease",
      entrance: "fadeIn 0.4s ease-out"
    }
  }
};

export const getThemeConfig = (optionName, isDarkMode = false) => {
  const config = themeConfigs[optionName];
  if (!config) return null;
  
  return {
    ...config,
    colors: isDarkMode ? config.dark : config.light,
    isDarkMode
  };
};

export const commonAnimations = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  @keyframes neonPulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75),
        0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75),
        0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }
`;