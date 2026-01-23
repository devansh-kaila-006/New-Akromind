import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["18, Kapoor Niwas, Dugri, Ludhiana, ", "Punjab, India 141001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 771 978 3125", "+91 771 079 9526"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello.newakromind@gmail.com"],
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHero
        badge="Get in Touch"
        title="Let's Start a Conversation"
        subtitle="Whether you have a question, need guidance, or want to explore opportunities — we're here to help."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels, and our team will respond promptly.
                </p>
              </div>

              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-primary/5 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Business Hours */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;