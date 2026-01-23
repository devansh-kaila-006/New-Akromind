import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";

const Privacy = () => {
  return (
    <Layout>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how we collect, use, and protect your information."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-8">
                  Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name, email address, phone number, and contact details</li>
                  <li>Information provided when filling out forms or surveys</li>
                  <li>Communications you send to us</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate about products, services, and events</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with trusted service providers who assist in operating 
                  our website and services, provided they agree to keep this information confidential.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> hello.newakromind@gmail.com
                  <br />
                  <strong>Address:</strong> 18, Kapoor Niwas, Dugri, Ludhiana, Punjab, India 141001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
