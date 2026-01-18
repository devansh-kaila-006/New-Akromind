import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";

const Terms = () => {
  return (
    <Layout>
      <PageHero
        badge="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-8">
                  Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by New Akromind and its verticals 
                  (AkroTution, AkroPlacement, AkroHolidays, AkroMind), you agree to be bound by 
                  these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  New Akromind provides services across four verticals:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>AkroTution:</strong> Educational programs, tutoring, and skill development</li>
                  <li><strong>AkroPlacement:</strong> Career guidance, job placement, and professional development</li>
                  <li><strong>AkroHolidays:</strong> Travel packages, tours, and holiday planning</li>
                  <li><strong>AkroMind:</strong> Consulting, innovation workshops, and strategic advisory</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Not interfere with the proper functioning of our services</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms vary by service and will be communicated at the time of booking 
                  or enrollment. All fees are non-refundable unless otherwise specified in the 
                  specific service agreement. We reserve the right to modify pricing with 
                  reasonable notice.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, trademarks, logos, and intellectual property displayed on our 
                  website and materials are the property of New Akromind. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  New Akromind shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services. 
                  Our total liability shall not exceed the amount paid by you for the specific 
                  service in question.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Modifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be 
                  effective immediately upon posting. Your continued use of our services 
                  after any changes indicates acceptance of the modified Terms.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these Terms, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> legal@newakromind.com
                  <br />
                  <strong>Address:</strong> 123 Innovation Hub, Tech District, New Delhi, India 110001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
