// BackgroundIcons.tsx
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CodeBracketIcon, CpuChipIcon, CommandLineIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const icons = [
  { component: CodeBracketIcon, size: 'w-12 h-12' },
  { component: CpuChipIcon, size: 'w-16 h-16' },
  { component: CommandLineIcon, size: 'w-14 h-14' },
  { component: GlobeAltIcon, size: 'w-20 h-20' },
];

const BackgroundIcons = () => {
  const container = useRef<HTMLDivElement>(null);
  const iconElements = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    iconElements.current.forEach((icon, index) => {
      const position = {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100)
      };

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(icon, {
        x: position.x * 0.8,
        y: position.y * 0.8,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(8, 12),
        ease: 'power1.inOut'
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="absolute inset-0 pointer-events-none opacity-10">
      {icons.map((Icon, index) => (
        <div
          key={index}
          ref={el => el && (iconElements.current[index] = el)}
          className={`absolute ${Icon.size} text-purple-300/20`}
          style={{
            left: `${gsap.utils.random(10, 90)}%`,
            top: `${gsap.utils.random(10, 90)}%`
          }}
        >
          <Icon.component className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;