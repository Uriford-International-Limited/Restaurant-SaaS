import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const LanguageSelect = () => {
  return (
    <div className="hidden lg:block">
      <Select>
        <SelectTrigger className="border-none outline-none bg-transparent shadow-none cursor-pointer hover:bg-accent">
          <Globe />
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="bangla">Bangla</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
