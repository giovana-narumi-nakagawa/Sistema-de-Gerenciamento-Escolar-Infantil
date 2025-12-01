import { useEffect, useRef, useState } from "react";

export function useWebSocket(url: string) {
  const [messages, setMessages] = useState<string[]>([]);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => console.log("WebSocket conectado");
    ws.current.onmessage = (event) =>
      setMessages((prev) => [...prev, event.data]);
    ws.current.onclose = () => console.log("WebSocket desconectado");

    return () => ws.current?.close();
  }, [url]);

  const sendMessage = (msg: string) => ws.current?.send(msg);

  return { messages, sendMessage };
}
