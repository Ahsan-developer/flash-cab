import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Plane, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { GeocodingService, LocationResult, barcelonaLocations } from "@/services/geocoding";

interface LocationSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: "plane" | "mappin";
  className?: string;
}

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
  value,
  onChange,
  placeholder,
  icon = "mappin",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locations, setLocations] = useState<LocationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  
  const geocodingService = useRef(new GeocodingService()).current;

  useEffect(() => {
    if (value.length === 0) {
      setLocations(barcelonaLocations.slice(0, 6));
      setIsOpen(false); // keep closed until click
      return;
    }

    if (value.length < 2) {
      setLocations([]);
      setIsOpen(false);
      return;
    }

    // Debounce search
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await geocodingService.searchLocations(value);
        setLocations(results);
        setIsOpen(results.length > 0);
      } catch (error) {
        console.error('Location search error:', error);
        // Fallback to local search
        const filtered = barcelonaLocations.filter(location =>
          location.name.toLowerCase().includes(value.toLowerCase())
        );
        setLocations(filtered);
        setIsOpen(filtered.length > 0);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [value, geocodingService]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleLocationSelect = (location: LocationResult) => {
    onChange(location.name);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleInputFocus = () => {
    // Only open dropdown if there's existing content and locations
    if (value.length >= 2 && locations.length > 0) {
      setIsOpen(true);
    } else if (value.length === 0) {
      setLocations(barcelonaLocations.slice(0, 6));
      setIsOpen(true);
    }
  };

  const handleInputClick = () => {
    // Show popular locations when clicking on empty field
    if (value.length === 0) {
      setLocations(barcelonaLocations.slice(0, 6));
      setIsOpen(true);
    } else if (locations.length > 0) {
      setIsOpen(true);
    }
  };

  const IconComponent = icon === "plane" ? Plane : MapPin;

  return (
    <div className="relative">
      <IconComponent className="absolute left-3 top-4 h-4 w-4 text-muted-foreground z-10" />
      {isLoading && (
        <Loader2 className="absolute right-3 top-4 h-4 w-4 text-muted-foreground animate-spin z-10" />
      )}
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        onFocus={() => { /* open only on click or search */ }}
        onClick={handleInputClick}
        className={cn("pl-10 h-12 bg-muted/50", isLoading && "pr-10", className)}
        placeholder={placeholder}
        autoComplete="off"
      />
      
      {isOpen && locations.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-60 overflow-auto pointer-events-auto"
        >
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationSelect(location)}
              className="px-4 py-3 hover:bg-muted cursor-pointer flex items-center gap-3 transition-colors"
            >
              <div className={cn(
                "w-2 h-2 rounded-full",
                location.type === 'airport' && "bg-blue-500",
                location.type === 'city' && "bg-green-500",
                location.type === 'hotel' && "bg-purple-500",
                location.type === 'landmark' && "bg-orange-500",
                location.type === 'place' && "bg-gray-500",
                location.type === 'restaurant' && "bg-red-500"
              )} />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{location.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {location.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearchInput;