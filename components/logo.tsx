"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-20",
    md: "h-22",
    lg: "h-24",
    xl: "h-26",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizes[size]} w-auto`}
      >
        {/* Top droplet */}
        <path
          d="M40 6C40 6 34 14 34 18C34 21.3137 36.6863 24 40 24C43.3137 24 46 21.3137 46 18C46 14 40 6 40 6Z"
          fill="#1e40af"
        />

        {/* Middle row droplets */}
        <path
          d="M26 20C26 20 20 30 20 36C20 40.4183 23.5817 44 28 44C32.4183 44 36 40.4183 36 36C36 30 26 20 26 20Z"
          fill="#1e40af"
        />
        <path
          d="M54 20C54 20 48 30 48 36C48 40.4183 51.5817 44 56 44C60.4183 44 64 40.4183 64 36C64 30 54 20 54 20Z"
          fill="#1e40af"
        />

        {/* Center core droplet (largest focal) */}
        <path
          d="M40 24C40 24 28 40 28 50C28 57.732 34.268 64 42 64C49.732 64 56 57.732 56 50C56 40 40 24 40 24Z"
          fill="#1e40af"
        />

        {/* Bottom supporting droplets */}
        <path
          d="M22 46C22 46 18 54 18 58C18 61.3137 20.6863 64 24 64C27.3137 64 30 61.3137 30 58C30 54 22 46 22 46Z"
          fill="#1e40af"
          opacity="0.85"
        />
        <path
          d="M58 46C58 46 54 54 54 58C54 61.3137 56.6863 64 60 64C63.3137 64 66 61.3137 66 58C66 54 58 46 58 46Z"
          fill="#1e40af"
          opacity="0.85"
        />

        {/* Subtle TP cutout (negative space illusion using white) */}
        <path d="M30 38H50V42H43V58H37V42H30V38Z" fill="white" opacity="0.95" />

        {/* Pipe + valve accent (scaled up for visibility) */}
        <rect x="50" y="44" width="5" height="14" rx="1.5" fill="#16a34a" />
        <circle cx="52.5" cy="41" r="4" fill="#dc2626" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-[0.1em] text-secondary">
          TOBS
        </span>
        <span className="text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
          Plumbing & Projects
        </span>
      </div>
    </div>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top droplet */}
      <path
        d="M40 6C40 6 34 14 34 18C34 21.3137 36.6863 24 40 24C43.3137 24 46 21.3137 46 18C46 14 40 6 40 6Z"
        fill="#1e40af"
      />

      {/* Middle row droplets */}
      <path
        d="M26 20C26 20 20 30 20 36C20 40.4183 23.5817 44 28 44C32.4183 44 36 40.4183 36 36C36 30 26 20 26 20Z"
        fill="#1e40af"
      />
      <path
        d="M54 20C54 20 48 30 48 36C48 40.4183 51.5817 44 56 44C60.4183 44 64 40.4183 64 36C64 30 54 20 54 20Z"
        fill="#1e40af"
      />

      {/* Center core droplet (largest focal) */}
      <path
        d="M40 24C40 24 28 40 28 50C28 57.732 34.268 64 42 64C49.732 64 56 57.732 56 50C56 40 40 24 40 24Z"
        fill="#1e40af"
      />

      {/* Bottom supporting droplets */}
      <path
        d="M22 46C22 46 18 54 18 58C18 61.3137 20.6863 64 24 64C27.3137 64 30 61.3137 30 58C30 54 22 46 22 46Z"
        fill="#1e40af"
        opacity="0.85"
      />
      <path
        d="M58 46C58 46 54 54 54 58C54 61.3137 56.6863 64 60 64C63.3137 64 66 61.3137 66 58C66 54 58 46 58 46Z"
        fill="#1e40af"
        opacity="0.85"
      />

      {/* Subtle TP cutout (negative space illusion using white) */}
      <path d="M30 38H50V42H43V58H37V42H30V38Z" fill="white" opacity="0.95" />

      {/* Pipe + valve accent (scaled up for visibility) */}
      <rect x="50" y="44" width="5" height="14" rx="1.5" fill="#16a34a" />
      <circle cx="52.5" cy="41" r="4" fill="#dc2626" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
  {/* Top droplet */}
  <path
    d="M40 6C40 6 34 14 34 18C34 21.3137 36.6863 24 40 24C43.3137 24 46 21.3137 46 18C46 14 40 6 40 6Z"
    fill="#1e40af"
  />

  {/* Middle row droplets */}
  <path
    d="M26 20C26 20 20 30 20 36C20 40.4183 23.5817 44 28 44C32.4183 44 36 40.4183 36 36C36 30 26 20 26 20Z"
    fill="#1e40af"
  />
  <path
    d="M54 20C54 20 48 30 48 36C48 40.4183 51.5817 44 56 44C60.4183 44 64 40.4183 64 36C64 30 54 20 54 20Z"
    fill="#1e40af"
  />

  {/* Center core droplet (largest focal) */}
  <path
    d="M40 24C40 24 28 40 28 50C28 57.732 34.268 64 42 64C49.732 64 56 57.732 56 50C56 40 40 24 40 24Z"
    fill="#1e40af"
  />

  {/* Bottom supporting droplets */}
  <path
    d="M22 46C22 46 18 54 18 58C18 61.3137 20.6863 64 24 64C27.3137 64 30 61.3137 30 58C30 54 22 46 22 46Z"
    fill="#1e40af"
    opacity="0.85"
  />
  <path
    d="M58 46C58 46 54 54 54 58C54 61.3137 56.6863 64 60 64C63.3137 64 66 61.3137 66 58C66 54 58 46 58 46Z"
    fill="#1e40af"
    opacity="0.85"
  />

  {/* Subtle TP cutout (negative space illusion using white) */}
  <path
    d="M30 38H50V42H43V58H37V42H30V38Z"
    fill="white"
    opacity="0.95"
  />

  {/* Pipe + valve accent (scaled up for visibility) */}
  <rect x="50" y="44" width="5" height="14" rx="1.5" fill="#16a34a" />
  <circle cx="52.5" cy="41" r="4" fill="#dc2626" />
    </svg>
  );
}
