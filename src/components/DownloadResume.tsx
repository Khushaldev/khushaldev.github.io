import { Download } from "lucide-react";
import { Button } from "./ui/button";

// export default function FloatingActionButton() {
//     return (
//         <Button
//             variant="outline"
//             className="border-terminal-neon text-terminal-neon hover:bg-terminal-neon hover:text-black dark:hover:text-black transition-colors"
//             asChild
//         >
//             <a href="/resume.pdf" download="Khushal_Resume.pdf" className="flex items-center">
//                 <Download className="mr-2" size={16} />
//                 Download Resume
//             </a>
//         </Button>
//     )
// }




export default function FloatingActionButton() {
    return (
        <div className="">
            {/* Full button for md and up */}
            <Button
                variant="outline"
                className="flex items-center border-terminal-neon text-terminal-neon hover:bg-terminal-neon hover:text-black dark:hover:text-black transition-colors"
                asChild
            >
                <a href="/resume.pdf" download="Khushal_Resume.pdf" className="flex items-center">
                    <Download className="mr-2" size={16} />
                    Download CV
                </a>
            </Button>

            {/* Icon button for mobile
            <Button
                variant="outline"
                size="icon"
                className="md:hidden p-3 rounded-full border-terminal-neon text-terminal-neon hover:bg-terminal-neon hover:text-black dark:hover:text-black transition-colors"
                asChild
            >
                <a href="/resume.pdf" download="Khushal_Resume.pdf">
                    <Download size={20} />
                </a>
            </Button> */}
        </div>
    );
}
