
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CodeBlockProps {
  code: string;
  title?: string;
}

const CodeBlock = ({ code, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Simple syntax highlighting for PicCode
  const highlightSyntax = (code: string) => {
    return code
      .replace(/(import|let|function|if|else|when|is)/g, '<span class="text-purple-600 font-semibold">$1</span>')
      .replace(/(=|->|\|>)/g, '<span class="text-blue-600 font-semibold">$1</span>')
      .replace(/(".*?")/g, '<span class="text-green-600">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-orange-600">$1</span>')
      .replace(/(IO\.println|std\.io)/g, '<span class="text-indigo-600">$1</span>');
  };

  return (
    <Card className="relative overflow-hidden bg-gray-900 border-0 shadow-2xl">
      {title && (
        <div className="px-6 py-3 bg-gray-800 border-b border-gray-700">
          <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        </div>
      )}
      <div className="relative">
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
        <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
          <code 
            className="text-gray-300 font-mono"
            dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
          />
        </pre>
      </div>
    </Card>
  );
};

export default CodeBlock;
