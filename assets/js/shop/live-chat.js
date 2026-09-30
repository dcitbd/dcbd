/**
 * Interactive Live Chat Engine
 */
const DCBD_LiveChat = {
  messages: [
    { sender: "support", text: "আসসালামু আলাইকুম! Dream Cart BD-তে স্বাগতম। আমি আপনাকে কীভাবে সহায়তা করতে পারি?", time: "Just now" }
  ],

  init() {
    this.render();
    const sendBtn = document.getElementById("chat-send-btn");
    const input = document.getElementById("chat-message-input");

    sendBtn?.addEventListener("click", () => this.sendMessage());
    input?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.sendMessage();
    });
  },

  render() {
    const container = document.getElementById("chat-messages-container");
    if (!container) return;

    let html = "";
    this.messages.forEach(m => {
      const isMe = m.sender === "user";
      html += `
        <div class="chat-bubble ${isMe ? 'outgoing' : 'incoming'}">
          <div>${m.text}</div>
          <div class="chat-time">${m.time}</div>
        </div>
      `;
    });
    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  },

  sendMessage() {
    const input = document.getElementById("chat-message-input");
    const text = input?.value.trim();
    if (!text) return;

    this.messages.push({ sender: "user", text: text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    input.value = "";
    this.render();

    // Automated Digital Assistant Reply
    setTimeout(() => {
      let reply = "ধন্যবাদ মেসেজের জন্য। আমাদের একজন সাপোর্ট এক্সিকিউটিভ দ্রুত আপনার সাথে যুক্ত হচ্ছেন। জরুরি প্রয়োজনে কল করতে পারেন 01581703822 নম্বরে।";
      if (text.toLowerCase().includes("order") || text.includes("অর্ডার")) {
        reply = "আপনার অর্ডার ট্র্যাকিং করতে আমাদের ট্র্যাকিং পেজ ভিজিট করুন অথবা অর্ডার আইডি শেয়ার করুন।";
      } else if (text.toLowerCase().includes("reseller") || text.includes("রিসেলার")) {
        reply = "রিসেলার একাউন্টের জন্য Reseller Registration ফর্মটি পূরণ করুন অথবা আমাদের রিসেলার হেল্পলাইনে যোগাযোগ করুন।";
      }
      this.messages.push({ sender: "support", text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
      this.render();
    }, 1000);
  }
};
