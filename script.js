/* ===================================================
   SOCIOMIE DOCUMENTATION CENTER — script.js
   Full Interactive JavaScript Implementation
   Version: 2.1.0
   =================================================== */

'use strict';

// ========== ARTICLE DATABASE ==========
const ARTICLES = {
  // --- GETTING STARTED ---
  'introduction': {
    title: 'Introduction to Sociomie',
    category: 'Getting Started',
    readTime: '4 min read',
    updated: 'Last updated: 15 January 2025',
    prev: null,
    next: 'account-setup',
    body: `
      <h2 id="what-is-sociomie">What is Sociomie?</h2>
      <p>Sociomie is an enterprise-grade omni-channel customer engagement platform developed by <strong>Ivosight</strong>. It enables organizations to manage all customer interactions across every digital touchpoint — WhatsApp, Instagram, Facebook, Telegram, TikTok, and Live Chat — from a single, unified dashboard.</p>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Enterprise Ready</div>
          <div class="alert-text">Sociomie is trusted by 500+ enterprise organizations across banking, telco, FMCG, and government sectors in Southeast Asia.</div>
        </div>
      </div>

      <h2 id="key-features">Key Features</h2>
      <p>Sociomie provides a comprehensive suite of tools designed for high-volume, enterprise customer service operations:</p>
      <ul>
        <li><strong>Omni-Channel Inbox</strong> — Unified inbox aggregating messages from all connected channels in real time</li>
        <li><strong>Intelligent Ticketing</strong> — Full ticketing lifecycle management with SLA enforcement and escalation rules</li>
        <li><strong>CRM Integration</strong> — 360° customer profiles with full interaction history and segmentation</li>
        <li><strong>Automation Engine</strong> — No-code workflow builder for auto-replies, triggers, and routing rules</li>
        <li><strong>Analytics & Reporting</strong> — Real-time dashboards, KPI tracking, and customizable performance reports</li>
        <li><strong>REST API</strong> — Full-featured API for integrations with enterprise systems (ERP, CRM, BI tools)</li>
      </ul>

      <h2 id="architecture">Platform Architecture</h2>
      <p>Sociomie is built on a microservices architecture, ensuring high availability (99.9% SLA), horizontal scalability, and enterprise-grade security. All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</p>
      <div class="alert-box alert-success">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M7 10l2 2 4-4M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Security Certifications</div>
          <div class="alert-text">Sociomie is SOC 2 Type II certified, ISO 27001 compliant, and GDPR ready — meeting the strictest enterprise security requirements.</div>
        </div>
      </div>

      <h2 id="getting-started">Getting Started</h2>
      <p>New to Sociomie? Follow these steps to get up and running quickly:</p>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Create your account</h4><p>Contact Ivosight sales to provision your enterprise account. You'll receive an invitation email within 24 hours.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Connect your channels</h4><p>Link your WhatsApp Business API, Facebook Page, Instagram account, and other channels through the Channel Settings.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Configure your team</h4><p>Invite team members, assign roles, and set up your organizational structure with departments and queues.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Set up automation</h4><p>Create your first workflow — configure auto-replies, routing rules, and SLA policies to streamline operations.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><h4>Go live</h4><p>Your Sociomie instance is now ready. Monitor performance through the Analytics Dashboard in real time.</p></div></div>
      </div>

      <h2 id="support">Support & Resources</h2>
      <p>Ivosight provides dedicated enterprise support for all Sociomie clients:</p>
      <ul>
        <li>24/7 technical support via email and live chat</li>
        <li>Dedicated Customer Success Manager for enterprise accounts</li>
        <li>Quarterly business reviews and platform health checks</li>
        <li>Priority SLA with 2-hour response time for critical issues</li>
      </ul>
    `
  },

  'getting-started': {
    title: 'Getting Started with Sociomie',
    category: 'Getting Started',
    readTime: '5 min read',
    updated: 'Last updated: 15 January 2025',
    prev: null,
    next: 'introduction',
    body: `
      <h2 id="welcome">Welcome to Sociomie</h2>
      <p>This guide will help you get up and running with Sociomie quickly. Whether you're a new administrator or an agent joining an existing workspace, you'll find everything you need here.</p>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">First Time?</div>
          <div class="alert-text">We recommend starting with the Introduction article to understand Sociomie's core concepts before proceeding with setup.</div>
        </div>
      </div>

      <h2 id="quick-links">Quick Start Paths</h2>
      <ul>
        <li><strong>For Administrators</strong> — Begin with Account Setup, then configure Users and Channels</li>
        <li><strong>For Agents</strong> — Review the Login guide, then explore Ticket Management</li>
        <li><strong>For Developers</strong> — Head directly to API Authentication and Endpoint Reference</li>
        <li><strong>For Analysts</strong> — Start with the Analytics Dashboard overview</li>
      </ul>

      <h2 id="system-requirements">System Requirements</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Component</th><th>Requirement</th></tr></thead>
          <tbody>
            <tr><td>Browser</td><td>Chrome 90+, Firefox 90+, Edge 90+, Safari 14+</td></tr>
            <tr><td>Screen Resolution</td><td>Minimum 1280 × 768px</td></tr>
            <tr><td>Internet Connection</td><td>Minimum 5 Mbps (10 Mbps recommended)</td></tr>
            <tr><td>Operating System</td><td>Windows 10+, macOS 11+, Ubuntu 20.04+</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="first-steps">Your First Steps</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Read the Introduction</h4><p>Understand what Sociomie is and how its core components work together.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Set up your account</h4><p>Complete your workspace configuration and invite your team members.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Connect your first channel</h4><p>Start with WhatsApp or Live Chat to begin receiving customer messages.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Configure an automation</h4><p>Set up a basic auto-reply or ticket routing rule to start saving time.</p></div></div>
      </div>
    `
  },

  'account-setup': {
    title: 'Account Setup Guide',
    category: 'Getting Started',
    readTime: '6 min read',
    updated: 'Last updated: 20 January 2025',
    prev: 'introduction',
    next: 'login',
    body: `
      <h2 id="prerequisites">Prerequisites</h2>
      <p>Before setting up your Sociomie account, ensure you have the following ready:</p>
      <ul>
        <li>Valid enterprise email address from your organization domain</li>
        <li>WhatsApp Business API credentials (if connecting WhatsApp)</li>
        <li>Facebook Business Manager access (for Facebook/Instagram channels)</li>
        <li>Your company's legal name and business registration number</li>
      </ul>
      <div class="alert-box alert-warning">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M10 2l8 16H2L10 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8v4M10 14.5v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Important Notice</div>
          <div class="alert-text">Account setup must be completed by a system administrator. Individual users cannot create accounts independently — your IT admin must provision the workspace first.</div>
        </div>
      </div>

      <h2 id="workspace-creation">Creating Your Workspace</h2>
      <p>Your Sociomie workspace is the central hub for your entire organization. Each workspace has a unique subdomain (e.g., <code>yourcompany.sociomile.net</code>).</p>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Access the Admin Portal</h4><p>Log into <code>app.sociomile.net/admin</code> using the credentials provided in your welcome email.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Complete Company Profile</h4><p>Fill in your company name, industry, company size, and primary business contact.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Configure Timezone & Language</h4><p>Set the default timezone for your workspace. This affects SLA calculations and report timestamps.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Set Up Departments</h4><p>Create departments that reflect your organizational structure (e.g., Customer Service, Technical Support, Sales).</p></div></div>
      </div>

      <h2 id="user-provisioning">User Provisioning</h2>
      <p>Sociomie supports multiple methods for provisioning users to your workspace:</p>
      <ul>
        <li><strong>Manual invitation</strong> — Invite users individually via email</li>
        <li><strong>Bulk CSV import</strong> — Upload a CSV file with user details for mass provisioning</li>
        <li><strong>LDAP/Active Directory sync</strong> — Sync users automatically from your directory service</li>
        <li><strong>SSO integration</strong> — Use SAML 2.0 or OIDC for single sign-on</li>
      </ul>

      <h2 id="channel-connection">Connecting Channels</h2>
      <p>Navigate to <strong>Settings → Channels</strong> to connect your communication channels:</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Channel</th><th>Requirements</th><th>Setup Time</th></tr></thead>
          <tbody>
            <tr><td>WhatsApp Business</td><td>Official WABA credentials, phone number</td><td>2–4 hours</td></tr>
            <tr><td>Instagram</td><td>Business account, Facebook Page linked</td><td>30 minutes</td></tr>
            <tr><td>Facebook Messenger</td><td>Facebook Business Manager admin access</td><td>20 minutes</td></tr>
            <tr><td>Telegram</td><td>Bot token from @BotFather</td><td>10 minutes</td></tr>
            <tr><td>Live Chat</td><td>Copy/paste embed code to your website</td><td>15 minutes</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  'login': {
    title: 'Login & Authentication',
    category: 'Getting Started',
    readTime: '5 min read',
    updated: 'Last updated: 18 January 2025',
    prev: 'account-setup',
    next: 'user-management',
    body: `
      <h2 id="logging-in">Logging In</h2>
      <p>Access your Sociomie workspace at <code>app.sociomile.net</code> or your custom subdomain. Enter your registered email address and password to sign in.</p>

      <h2 id="two-factor-auth">Two-Factor Authentication (2FA)</h2>
      <p>Sociomie supports TOTP-based 2FA for enhanced account security. Enterprise administrators can enforce 2FA for all workspace users.</p>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Enable 2FA</h4><p>Go to <strong>Profile → Security → Enable Two-Factor Authentication</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Scan QR Code</h4><p>Use an authenticator app (Google Authenticator, Authy, or Microsoft Authenticator) to scan the QR code.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Save Backup Codes</h4><p>Download and store your backup recovery codes in a secure location. These are needed if you lose access to your authenticator.</p></div></div>
      </div>

      <h2 id="sso">Single Sign-On (SSO)</h2>
      <p>Enterprise accounts can configure SAML 2.0 or OpenID Connect (OIDC) SSO. Supported providers include:</p>
      <ul>
        <li>Microsoft Azure Active Directory</li>
        <li>Okta</li>
        <li>Google Workspace</li>
        <li>Any SAML 2.0 or OIDC-compatible identity provider</li>
      </ul>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">SSO Configuration</div>
          <div class="alert-text">SSO setup is available in <strong>Settings → Security → Single Sign-On</strong> (Enterprise plan only). Contact your CSM for assistance.</div>
        </div>
      </div>

      <h2 id="session-management">Session Management</h2>
      <p>Sessions expire after 8 hours of inactivity by default. Administrators can configure session timeout duration in Security Settings. Users can view and revoke active sessions from their Profile page.</p>
    `
  },

  'user-management': {
    title: 'User Management',
    category: 'Getting Started',
    readTime: '7 min read',
    updated: 'Last updated: 20 January 2025',
    prev: 'login',
    next: 'role-permission',
    body: `
      <h2 id="overview">Overview</h2>
      <p>User management in Sociomie allows administrators to control who has access to the workspace and what they can do. Users can be organized into teams, assigned roles, and grouped into departments.</p>

      <h2 id="inviting-users">Inviting Users</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Navigate to User Settings</h4><p>Go to <strong>Settings → Team → Users → Invite User</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Enter Email Address</h4><p>Type the user's work email address. You can invite multiple users by separating emails with commas.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Assign Role & Team</h4><p>Select the appropriate role (Agent, Supervisor, Admin) and assign to a team or department.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Send Invitation</h4><p>The user will receive an email invitation with a link to set up their password.</p></div></div>
      </div>

      <h2 id="user-status">User Status</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Status</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>Active</code></td><td>User can log in and access the workspace</td></tr>
            <tr><td><code>Pending</code></td><td>Invitation sent but not yet accepted</td></tr>
            <tr><td><code>Suspended</code></td><td>Access temporarily revoked by admin</td></tr>
            <tr><td><code>Deactivated</code></td><td>Account permanently disabled, data retained</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="bulk-import">Bulk User Import</h2>
      <p>Import multiple users at once via CSV. Download the template from <strong>Settings → Team → Users → Import → Download Template</strong>. Required fields: <code>email</code>, <code>first_name</code>, <code>last_name</code>, <code>role</code>.</p>
    `
  },

  'role-permission': {
    title: 'Roles & Permissions',
    category: 'Getting Started',
    readTime: '6 min read',
    updated: 'Last updated: 20 January 2025',
    prev: 'user-management',
    next: 'whatsapp',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie uses a role-based access control (RBAC) system. Each user is assigned one primary role that determines their permissions across the platform.</p>

      <h2 id="default-roles">Default Roles</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Role</th><th>Description</th><th>Key Permissions</th></tr></thead>
          <tbody>
            <tr><td><strong>Administrator</strong></td><td>Full platform access</td><td>All settings, user management, billing</td></tr>
            <tr><td><strong>Supervisor</strong></td><td>Team management + agent capabilities</td><td>Monitor agents, assign tickets, view all reports</td></tr>
            <tr><td><strong>Agent</strong></td><td>Day-to-day customer service</td><td>Handle assigned tickets, send messages</td></tr>
            <tr><td><strong>Read-Only</strong></td><td>View access only</td><td>View tickets and reports, no modifications</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="custom-roles">Custom Roles (Enterprise)</h2>
      <p>Enterprise plans support creating custom roles with granular permission controls. Navigate to <strong>Settings → Team → Roles → Create Role</strong> to build a custom role from scratch.</p>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Custom Role Limit</div>
          <div class="alert-text">Enterprise plans support up to 20 custom roles. Contact your CSM if you need more.</div>
        </div>
      </div>

      <h2 id="permission-categories">Permission Categories</h2>
      <ul>
        <li><strong>Inbox</strong> — View all / assigned conversations, send messages, internal notes</li>
        <li><strong>Tickets</strong> — Create, assign, resolve, delete tickets</li>
        <li><strong>Contacts</strong> — View, create, edit, delete contacts</li>
        <li><strong>Reports</strong> — View operational, agent, and executive reports</li>
        <li><strong>Settings</strong> — Channel config, team settings, automation, billing</li>
      </ul>
    `
  },

  // --- OMNI CHANNEL ---
  'whatsapp': {
    title: 'WhatsApp Business API Integration',
    category: 'Omni Channel',
    readTime: '10 min read',
    updated: 'Last updated: 22 January 2025',
    prev: 'role-permission',
    next: 'instagram',
    body: `
      <h2 id="overview">Overview</h2>
      <p>WhatsApp Business API integration allows your organization to send and receive WhatsApp messages at scale through Sociomie. This is the most popular channel among Sociomie clients, accounting for over 60% of all interactions.</p>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Official Partnership</div>
          <div class="alert-text">Ivosight is an official Meta Business Solution Provider (BSP), ensuring premium API access, priority support from Meta, and compliance with WhatsApp's policies.</div>
        </div>
      </div>

      <h2 id="prerequisites">Requirements</h2>
      <ul>
        <li>An approved WhatsApp Business Account (WABA)</li>
        <li>A dedicated phone number not previously registered with WhatsApp</li>
        <li>Facebook Business Manager account verified with business documents</li>
        <li>Approved display name and business description</li>
      </ul>

      <h2 id="connection-steps">Connection Steps</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Access Channel Settings</h4><p>Go to <strong>Settings → Channels → Add Channel → WhatsApp</strong> in your Sociomie dashboard.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Connect Facebook Business Manager</h4><p>Click <em>Connect with Facebook</em> and authorize Sociomie to access your Business Manager.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Select Phone Number</h4><p>Choose the phone number from your WABA to register. If adding a new number, follow the OTP verification process.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Configure Display Settings</h4><p>Set your channel name, assign a team or department, and configure your initial auto-reply greeting message.</p></div></div>
        <div class="step"><div class="step-num">5</div><div class="step-content"><h4>Test the Connection</h4><p>Send a test message to verify the integration. You should receive it in your Sociomie inbox within seconds.</p></div></div>
      </div>

      <h2 id="message-templates">Message Templates</h2>
      <p>WhatsApp requires pre-approved message templates for outbound (business-initiated) messages. Sociomie provides a template manager to create, submit, and track template approval status.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">JSON — Template Structure</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "name": "order_confirmation",
  "category": "TRANSACTIONAL",
  "language": "id",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Konfirmasi Pesanan #{{1}}"
    },
    {
      "type": "BODY",
      "text": "Halo {{2}}, pesanan Anda dengan total {{3}} telah dikonfirmasi."
    },
    {
      "type": "FOOTER",
      "text": "Terima kasih telah berbelanja di {{4}}"
    }
  ]
}</pre></div>

      <h2 id="webhook-config">Webhook Configuration</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Event</th><th>Trigger</th><th>Payload</th></tr></thead>
          <tbody>
            <tr><td><code>message.received</code></td><td>New inbound message</td><td>Message object with sender info</td></tr>
            <tr><td><code>message.delivered</code></td><td>Message delivered to device</td><td>Message ID + timestamp</td></tr>
            <tr><td><code>message.read</code></td><td>Message opened by recipient</td><td>Message ID + read timestamp</td></tr>
            <tr><td><code>message.failed</code></td><td>Delivery failure</td><td>Error code + reason</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li>Always use approved templates for outbound campaigns to avoid policy violations</li>
        <li>Maintain a response time under 24 hours for inbound customer messages</li>
        <li>Use rich media (images, documents, quick reply buttons) to improve customer experience</li>
        <li>Monitor your Quality Rating in WhatsApp Business Manager monthly</li>
      </ul>
    `
  },

  'instagram': {
    title: 'Instagram Integration',
    category: 'Omni Channel',
    readTime: '7 min read',
    updated: 'Last updated: 22 January 2025',
    prev: 'whatsapp',
    next: 'facebook',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Connect your Instagram Business account to Sociomie to manage Direct Messages (DMs) and comment interactions from your unified inbox. Sociomie supports Instagram Messaging API for DMs and the Graph API for comment management.</p>

      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>Instagram Business or Creator account</li>
        <li>Facebook Page linked to the Instagram account</li>
        <li>Facebook Business Manager admin access</li>
        <li>Instagram Messaging enabled in your Business Manager</li>
      </ul>

      <h2 id="connection-steps">Connection Steps</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Go to Channel Settings</h4><p>Navigate to <strong>Settings → Channels → Add Channel → Instagram</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Authorize with Facebook</h4><p>Log in with Facebook and grant Sociomie permission to manage your Instagram messages.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Select Instagram Account</h4><p>Choose the Instagram Business account you want to connect from the list of available accounts.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Configure Settings</h4><p>Set the channel name, team assignment, and whether to receive comment notifications.</p></div></div>
      </div>

      <h2 id="supported-features">Supported Features</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Feature</th><th>Supported</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Direct Messages</td><td>✅ Yes</td><td>Full send/receive support</td></tr>
            <tr><td>Story Replies</td><td>✅ Yes</td><td>Replies to stories appear as DMs</td></tr>
            <tr><td>Post Comments</td><td>✅ Yes</td><td>View and reply to public comments</td></tr>
            <tr><td>Image/Video Messages</td><td>✅ Yes</td><td>Receive media, send images</td></tr>
            <tr><td>Voice Messages</td><td>❌ No</td><td>Instagram API limitation</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  'facebook': {
    title: 'Facebook Messenger Integration',
    category: 'Omni Channel',
    readTime: '6 min read',
    updated: 'Last updated: 22 January 2025',
    prev: 'instagram',
    next: 'telegram',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Connect your Facebook Page to Sociomie to manage Messenger conversations alongside all your other channels. Sociomie supports the full Facebook Messenger Platform API for rich messaging experiences.</p>

      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>Facebook Page (not a personal profile)</li>
        <li>Facebook Business Manager access</li>
        <li>Page admin role</li>
      </ul>

      <h2 id="connection-steps">Connection Steps</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Navigate to Channels</h4><p>Go to <strong>Settings → Channels → Add Channel → Facebook Messenger</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Connect Facebook Account</h4><p>Authorize Sociomie via Facebook OAuth. You must be a Page admin.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Select Facebook Page</h4><p>Choose the Facebook Page whose Messenger you want to integrate.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Enable Message Settings</h4><p>Configure response window settings and set up your initial greeting and persistent menu.</p></div></div>
      </div>

      <h2 id="messenger-features">Messenger Features</h2>
      <ul>
        <li><strong>Quick Replies</strong> — Pre-defined response buttons for common customer inquiries</li>
        <li><strong>Persistent Menu</strong> — Always-visible menu for navigation and common actions</li>
        <li><strong>Postback Buttons</strong> — Trigger specific workflows from customer button clicks</li>
        <li><strong>Rich Media</strong> — Send images, videos, files, and location data</li>
      </ul>
    `
  },

  'telegram': {
    title: 'Telegram Bot Integration',
    category: 'Omni Channel',
    readTime: '5 min read',
    updated: 'Last updated: 22 January 2025',
    prev: 'facebook',
    next: 'tiktok',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Create a Telegram bot and connect it to Sociomie to handle customer messages via the Telegram platform. Sociomie uses the official Telegram Bot API for all interactions.</p>

      <h2 id="create-bot">Creating a Telegram Bot</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Contact @BotFather</h4><p>Open Telegram and search for <code>@BotFather</code>. Send the command <code>/newbot</code>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Name Your Bot</h4><p>Provide a display name and a unique username ending in <code>bot</code> (e.g., <code>YourCompanySupport_bot</code>).</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Copy Bot Token</h4><p>BotFather will provide an API token. Copy this — you'll need it in the next step.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Connect to Sociomie</h4><p>Go to <strong>Settings → Channels → Add Channel → Telegram</strong> and paste your bot token.</p></div></div>
      </div>

      <div class="alert-box alert-warning">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M10 2l8 16H2L10 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8v4M10 14.5v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">File Size Limit</div>
          <div class="alert-text">Telegram bots can receive files up to 20MB and send files up to 50MB. Files larger than these limits will fail to transfer.</div>
        </div>
      </div>
    `
  },

  'tiktok': {
    title: 'TikTok Integration',
    category: 'Omni Channel',
    readTime: '6 min read',
    updated: 'Last updated: 1 February 2025',
    prev: 'telegram',
    next: 'livechat',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie v3.5.0 introduces TikTok Business integration, allowing your team to receive and respond to TikTok DMs and post comments directly from the unified inbox.</p>
      <div class="alert-box alert-success">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M7 10l2 2 4-4M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">New in v3.5.0</div>
          <div class="alert-text">TikTok integration is available on all plans. Connect your TikTok Business account in Settings → Channels.</div>
        </div>
      </div>

      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>TikTok Business Account (personal accounts are not supported)</li>
        <li>TikTok for Business Manager access</li>
        <li>Account with at least 1,000 followers to enable DMs</li>
      </ul>

      <h2 id="connection">Connecting TikTok</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Open Channel Settings</h4><p>Navigate to <strong>Settings → Channels → Add Channel → TikTok</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Authorize with TikTok</h4><p>Click <em>Connect TikTok Business</em> and complete the OAuth authorization flow.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Configure Preferences</h4><p>Choose which interactions to route to Sociomie: DMs only, comments only, or both.</p></div></div>
      </div>
    `
  },

  'livechat': {
    title: 'Live Chat Widget',
    category: 'Omni Channel',
    readTime: '8 min read',
    updated: 'Last updated: 22 January 2025',
    prev: 'tiktok',
    next: 'ticket-management',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Sociomie Live Chat widget can be embedded on any website or web application, providing real-time chat capability for your website visitors. The widget is fully customizable to match your brand.</p>

      <h2 id="installation">Installation</h2>
      <p>Add the following script to your website's <code>&lt;head&gt;</code> section or before the closing <code>&lt;/body&gt;</code> tag:</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">HTML — Widget Embed Code</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>&lt;script&gt;
  (function(w,d,s,o,f,js,fjs){
    w['SociomieWidget']=o;
    w[o]=w[o]||function(){
      (w[o].q=w[o].q||[]).push(arguments)
    };
    js=d.createElement(s);
    fjs=d.getElementsByTagName(s)[0];
    js.id=o;
    js.src=f;
    js.async=1;
    fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','smc',
    'https://cdn.sociomile.net/widget/v2/loader.js'));
  smc('init', {
    token: 'YOUR_WIDGET_TOKEN',
    locale: 'id'
  });
&lt;/script&gt;</pre></div>

      <h2 id="customization">Widget Customization</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>primaryColor</code></td><td>String (hex)</td><td>Widget accent color</td></tr>
            <tr><td><code>position</code></td><td>String</td><td>'bottom-right' or 'bottom-left'</td></tr>
            <tr><td><code>greeting</code></td><td>String</td><td>Initial greeting message</td></tr>
            <tr><td><code>showOnLoad</code></td><td>Boolean</td><td>Auto-open widget on page load</td></tr>
            <tr><td><code>locale</code></td><td>String</td><td>Interface language (id, en, etc.)</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  // --- TICKETING ---
  'ticket-management': {
    title: 'Ticket Management',
    category: 'Ticketing System',
    readTime: '8 min read',
    updated: 'Last updated: 18 January 2025',
    prev: 'livechat',
    next: 'assignment',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie's ticketing system transforms every customer interaction into a trackable, manageable ticket. Whether a conversation comes in via WhatsApp, email, or Live Chat, it gets converted into a ticket that moves through a defined lifecycle until resolution.</p>

      <h2 id="ticket-lifecycle">Ticket Lifecycle</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Status</th><th>Description</th><th>Next Status</th></tr></thead>
          <tbody>
            <tr><td><code>New</code></td><td>Ticket created, unassigned</td><td>Open, Pending</td></tr>
            <tr><td><code>Open</code></td><td>Assigned to an agent, in progress</td><td>Pending, Resolved</td></tr>
            <tr><td><code>Pending</code></td><td>Waiting for customer response</td><td>Open, Resolved</td></tr>
            <tr><td><code>Resolved</code></td><td>Issue addressed, awaiting confirmation</td><td>Closed, Reopened</td></tr>
            <tr><td><code>Closed</code></td><td>Fully completed, archived</td><td>Reopened</td></tr>
            <tr><td><code>Escalated</code></td><td>Moved to higher-tier support</td><td>Open (Level 2)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="creating-tickets">Creating Tickets</h2>
      <ul>
        <li><strong>Automatically</strong> — When a new customer message arrives on any connected channel</li>
        <li><strong>Manually</strong> — Agents can create tickets from the New Ticket button in the inbox</li>
        <li><strong>Via API</strong> — External systems can create tickets using the Tickets REST API</li>
        <li><strong>Email forwarding</strong> — Forward emails to your Sociomie inbox email address</li>
      </ul>

      <h2 id="ticket-fields">Ticket Fields & Attributes</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Ticket ID</td><td>String</td><td>Unique identifier (e.g., TKT-2025-001234)</td></tr>
            <tr><td>Subject</td><td>String</td><td>Brief description of the issue</td></tr>
            <tr><td>Priority</td><td>Enum</td><td>Low, Medium, High, Critical</td></tr>
            <tr><td>Category</td><td>Enum</td><td>Custom categories defined by admin</td></tr>
            <tr><td>Assignee</td><td>User</td><td>Assigned agent or team</td></tr>
            <tr><td>SLA Policy</td><td>Reference</td><td>Linked SLA with response and resolution targets</td></tr>
            <tr><td>Tags</td><td>Array</td><td>Flexible labels for filtering and reporting</td></tr>
            <tr><td>Custom Fields</td><td>Dynamic</td><td>Organization-defined fields (e.g., Order ID, Region)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="bulk-actions">Bulk Actions</h2>
      <ul>
        <li>Bulk assign to agent or team</li>
        <li>Bulk status update (resolve, close, reopen)</li>
        <li>Bulk add tags</li>
        <li>Bulk export to CSV for reporting</li>
        <li>Bulk delete (admin only)</li>
      </ul>
      <div class="alert-box alert-warning">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M10 2l8 16H2L10 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8v4M10 14.5v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Caution with Bulk Actions</div>
          <div class="alert-text">Bulk status changes trigger notifications to customers. Review your selection carefully before applying bulk operations, especially on Resolved or Closed tickets.</div>
        </div>
      </div>
    `
  },

  'assignment': {
    title: 'Ticket Assignment',
    category: 'Ticketing System',
    readTime: '5 min read',
    updated: 'Last updated: 18 January 2025',
    prev: 'ticket-management',
    next: 'escalation',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie offers flexible ticket assignment options ranging from manual agent assignment to fully automated routing based on custom rules.</p>

      <h2 id="assignment-methods">Assignment Methods</h2>
      <ul>
        <li><strong>Manual Assignment</strong> — Supervisors or agents manually assign tickets from the inbox view</li>
        <li><strong>Auto-Assignment (Round Robin)</strong> — Evenly distribute tickets among available agents in a team</li>
        <li><strong>Load-Based Assignment</strong> — Assign to the agent with the fewest open tickets</li>
        <li><strong>Skill-Based Routing</strong> — Route tickets to agents with specific skills or expertise tags</li>
        <li><strong>Workflow Rules</strong> — Custom conditions trigger specific assignment actions</li>
      </ul>

      <h2 id="auto-assignment">Configuring Auto-Assignment</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Open Team Settings</h4><p>Navigate to <strong>Settings → Team → Teams → [Select Team] → Assignment</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Enable Auto-Assignment</h4><p>Toggle on <em>Auto-assign new conversations</em> and select your assignment method.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Set Agent Capacity</h4><p>Configure maximum concurrent tickets per agent to prevent overload (default: 10).</p></div></div>
      </div>

      <h2 id="reassignment">Reassignment & Transfers</h2>
      <p>Any agent or supervisor can reassign an open ticket at any time. Reassignment activity is logged in the ticket's activity feed with the reason and agent who made the change.</p>
    `
  },

  'escalation': {
    title: 'Escalation Rules',
    category: 'Ticketing System',
    readTime: '6 min read',
    updated: 'Last updated: 18 January 2025',
    prev: 'assignment',
    next: 'sla',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Escalation rules automatically elevate tickets to a higher support tier when predefined conditions are met — such as SLA breach, customer priority, or repeated contact.</p>

      <h2 id="escalation-triggers">Common Escalation Triggers</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Trigger</th><th>Example Condition</th></tr></thead>
          <tbody>
            <tr><td>SLA First Response Breach</td><td>No agent response within 1 hour</td></tr>
            <tr><td>SLA Resolution Breach</td><td>Ticket unresolved after 8 hours</td></tr>
            <tr><td>Customer Priority</td><td>Contact tagged as VIP or Enterprise</td></tr>
            <tr><td>Negative Sentiment</td><td>AI detects frustration or urgency in messages</td></tr>
            <tr><td>Repeated Contact</td><td>Same customer contacts 3+ times in 24 hours</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="configuring-escalation">Configuring Escalation Rules</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Open Automation Settings</h4><p>Navigate to <strong>Settings → Automation → Escalation Rules → Add Rule</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Define Trigger Conditions</h4><p>Set the conditions that activate escalation (e.g., SLA breach + High priority).</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Set Escalation Action</h4><p>Choose what happens: reassign to team, change priority, notify supervisor, or trigger webhook.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Test the Rule</h4><p>Use the rule simulator to verify the escalation fires correctly before enabling in production.</p></div></div>
      </div>
    `
  },

  'sla': {
    title: 'SLA Management',
    category: 'Ticketing System',
    readTime: '7 min read',
    updated: 'Last updated: 18 January 2025',
    prev: 'escalation',
    next: 'contact-management',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Service Level Agreements (SLAs) in Sociomie define the time targets your team must meet for first response and full resolution. SLA policies ensure accountability and help maintain customer satisfaction.</p>

      <h2 id="sla-metrics">SLA Metrics</h2>
      <ul>
        <li><strong>First Response Time (FRT)</strong> — Time from ticket creation to first agent response</li>
        <li><strong>Next Response Time (NRT)</strong> — Maximum time between subsequent agent responses</li>
        <li><strong>Resolution Time</strong> — Total time from creation to ticket closure</li>
      </ul>

      <h2 id="creating-sla">Creating an SLA Policy</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Navigate to SLA Settings</h4><p>Go to <strong>Settings → Tickets → SLA Policies → Add SLA Policy</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Name and Describe</h4><p>Give the policy a clear name (e.g., "Enterprise 1-Hour SLA") and description.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Set Time Targets</h4><p>Define FRT and resolution time targets for each priority level (Low, Medium, High, Critical).</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Configure Business Hours</h4><p>Specify if SLA timers should pause outside business hours and on holidays.</p></div></div>
      </div>

      <h2 id="sla-reporting">SLA Reporting</h2>
      <p>Track SLA compliance in <strong>Analytics → Reports → SLA Report</strong>. The report shows breach rates by team, agent, priority, and channel, helping identify bottlenecks and training needs.</p>
    `
  },

  // --- CRM ---
  'contact-management': {
    title: 'Contact Management',
    category: 'CRM',
    readTime: '6 min read',
    updated: 'Last updated: 25 January 2025',
    prev: 'sla',
    next: 'customer-profile',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Sociomie CRM provides a centralized database of all your customer contacts, with full interaction history, segmentation tools, and integration with your ticketing and messaging systems.</p>

      <h2 id="contact-fields">Contact Fields</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Name</td><td>String</td><td>Full name of the contact</td></tr>
            <tr><td>Email</td><td>String</td><td>Primary email address</td></tr>
            <tr><td>Phone</td><td>String</td><td>Phone number (used for WhatsApp matching)</td></tr>
            <tr><td>Company</td><td>String</td><td>Organization name</td></tr>
            <tr><td>Tags</td><td>Array</td><td>Labels for segmentation (e.g., VIP, Enterprise)</td></tr>
            <tr><td>Custom Fields</td><td>Dynamic</td><td>Organization-defined fields</td></tr>
            <tr><td>Channel IDs</td><td>Object</td><td>Platform-specific IDs for matched channels</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="importing-contacts">Importing Contacts</h2>
      <p>Import contacts via CSV from <strong>Contacts → Import Contacts</strong>. The import wizard validates your data before processing. Duplicate detection is based on email address and phone number.</p>

      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Import Limit</div>
          <div class="alert-text">Each CSV import supports up to 50,000 contacts. For larger datasets, split into multiple files or use the Contacts API.</div>
        </div>
      </div>
    `
  },

  'customer-profile': {
    title: 'Customer Profile',
    category: 'CRM',
    readTime: '5 min read',
    updated: 'Last updated: 25 January 2025',
    prev: 'contact-management',
    next: 'segmentation',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Customer Profile provides a 360° view of each contact, consolidating all interaction history, ticket records, channel connections, and custom attributes into a single unified view.</p>

      <h2 id="profile-sections">Profile Sections</h2>
      <ul>
        <li><strong>Contact Details</strong> — Basic information, social handles, and custom fields</li>
        <li><strong>Conversation History</strong> — All past and current conversations across all channels</li>
        <li><strong>Ticket History</strong> — All tickets linked to this contact with full status tracking</li>
        <li><strong>Notes</strong> — Internal agent notes about the contact</li>
        <li><strong>Activity Timeline</strong> — Chronological log of all interactions and changes</li>
      </ul>

      <h2 id="merging-contacts">Merging Duplicate Contacts</h2>
      <p>When the system detects duplicate contacts (same phone number or email across different channels), it will suggest a merge. You can also manually merge contacts from the Contact profile page by clicking <strong>Actions → Merge Contact</strong>.</p>
    `
  },

  'segmentation': {
    title: 'Segmentation',
    category: 'CRM',
    readTime: '5 min read',
    updated: 'Last updated: 25 January 2025',
    prev: 'customer-profile',
    next: 'dashboard',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Segmentation allows you to group contacts into targeted lists based on attributes, behavior, and interaction history. Segments can be used to target broadcasts, trigger workflows, and filter reports.</p>

      <h2 id="segment-types">Segment Types</h2>
      <ul>
        <li><strong>Static Segments</strong> — Manually curated contact lists that don't auto-update</li>
        <li><strong>Dynamic Segments</strong> — Auto-updating lists based on rule conditions evaluated continuously</li>
      </ul>

      <h2 id="creating-segment">Creating a Dynamic Segment</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Open Segments</h4><p>Navigate to <strong>Contacts → Segments → Create Segment</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Define Rules</h4><p>Add conditions using contact attributes, tags, ticket history, or channel data.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Preview & Save</h4><p>Preview matching contacts before saving. The segment will auto-update as contact data changes.</p></div></div>
      </div>
    `
  },

  // --- ANALYTICS ---
  'dashboard': {
    title: 'Analytics Dashboard',
    category: 'Analytics',
    readTime: '7 min read',
    updated: 'Last updated: 12 January 2025',
    prev: 'segmentation',
    next: 'reports',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Sociomie Analytics Dashboard provides real-time visibility into your customer service operations. It combines operational metrics, agent performance data, and channel analytics into a single, interactive interface.</p>

      <h2 id="dashboard-sections">Dashboard Sections</h2>
      <ul>
        <li><strong>Live Overview</strong> — Real-time count of active conversations, queued tickets, and online agents</li>
        <li><strong>Channel Performance</strong> — Message volume and response metrics per channel</li>
        <li><strong>Agent Performance</strong> — Individual and team-level metrics including FCR, CSAT, and AHT</li>
        <li><strong>SLA Compliance</strong> — First response and resolution rate against SLA targets</li>
        <li><strong>Trend Analysis</strong> — Historical comparison with configurable date ranges</li>
      </ul>

      <h2 id="key-metrics">Key Metrics Explained</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Metric</th><th>Definition</th><th>Target</th></tr></thead>
          <tbody>
            <tr><td>CSAT Score</td><td>Customer Satisfaction Score — average of post-interaction surveys</td><td>≥ 85%</td></tr>
            <tr><td>FCR</td><td>First Contact Resolution — tickets resolved without escalation</td><td>≥ 75%</td></tr>
            <tr><td>AHT</td><td>Average Handling Time — time from ticket open to close</td><td>Varies by tier</td></tr>
            <tr><td>FRT</td><td>First Response Time — time from ticket creation to first agent response</td><td>Per SLA policy</td></tr>
            <tr><td>Abandon Rate</td><td>% of customers who disconnect before agent response</td><td>≤ 5%</td></tr>
            <tr><td>Queue Depth</td><td>Number of tickets waiting for assignment</td><td>≤ 20 (recommended)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="custom-dashboards">Custom Dashboards</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Create New Dashboard</h4><p>Click <strong>Analytics → Dashboards → + New Dashboard</strong> and give it a descriptive name.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Add Widgets</h4><p>Choose from 40+ widget types: line charts, bar graphs, pie charts, data tables, KPI tiles, and heatmaps.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Configure Filters</h4><p>Set global filters for date range, channel, team, and agent that apply to all widgets.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Share & Schedule</h4><p>Share the dashboard URL with stakeholders or schedule automated PDF/Excel report delivery via email.</p></div></div>
      </div>
    `
  },

  'reports': {
    title: 'Reports & Exports',
    category: 'Analytics',
    readTime: '6 min read',
    updated: 'Last updated: 12 January 2025',
    prev: 'dashboard',
    next: 'kpi',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie provides a comprehensive reporting suite for operational, agent performance, and executive-level insights. All reports support custom date ranges and can be exported to PDF, CSV, or Excel.</p>

      <h2 id="report-types">Report Types</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Report</th><th>Description</th><th>Audience</th></tr></thead>
          <tbody>
            <tr><td>Overview Report</td><td>High-level operational KPIs</td><td>Management</td></tr>
            <tr><td>Agent Performance</td><td>Individual agent metrics and rankings</td><td>Supervisors</td></tr>
            <tr><td>SLA Report</td><td>First response and resolution compliance</td><td>Operations</td></tr>
            <tr><td>Channel Report</td><td>Volume and engagement by channel</td><td>Operations</td></tr>
            <tr><td>CSAT Report</td><td>Customer satisfaction scores and trends</td><td>CX Team</td></tr>
            <tr><td>Ticket Volume</td><td>Tickets created, resolved, backlog by period</td><td>All</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="scheduled-reports">Scheduled Report Delivery</h2>
      <p>Configure automatic report delivery via email on a daily, weekly, or monthly schedule. Navigate to <strong>Analytics → Reports → Schedule Report</strong> to set up automated delivery.</p>
    `
  },

  'kpi': {
    title: 'KPI Configuration',
    category: 'Analytics',
    readTime: '5 min read',
    updated: 'Last updated: 12 January 2025',
    prev: 'reports',
    next: 'performance',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Configure custom KPI targets in Sociomie to align platform metrics with your organization's service standards. KPI targets appear as thresholds in dashboard charts and trigger alerts when breached.</p>

      <h2 id="configuring-kpis">Configuring KPI Targets</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Open KPI Settings</h4><p>Navigate to <strong>Analytics → KPI Configuration</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Select Metric</h4><p>Choose a metric to configure (CSAT, FRT, FCR, AHT, etc.).</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Set Target & Alert Threshold</h4><p>Define the target value and the threshold at which an alert notification is triggered.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Assign Alert Recipients</h4><p>Configure who receives notifications when KPI targets are missed.</p></div></div>
      </div>
    `
  },

  'performance': {
    title: 'Performance Metrics',
    category: 'Analytics',
    readTime: '6 min read',
    updated: 'Last updated: 12 January 2025',
    prev: 'kpi',
    next: 'workflow',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Sociomie tracks granular performance metrics for agents, teams, and channels to help supervisors identify areas for coaching, recognize top performers, and optimize team capacity.</p>

      <h2 id="agent-metrics">Agent Performance Metrics</h2>
      <ul>
        <li><strong>Conversations Handled</strong> — Total tickets handled in the reporting period</li>
        <li><strong>Average Handle Time</strong> — Mean time from ticket assignment to resolution</li>
        <li><strong>First Response Time</strong> — Average time to first reply</li>
        <li><strong>CSAT Score</strong> — Average customer satisfaction rating received</li>
        <li><strong>Resolution Rate</strong> — Percentage of assigned tickets resolved (not escalated)</li>
        <li><strong>Online Time</strong> — Total hours agent was marked as available</li>
      </ul>

      <h2 id="team-metrics">Team Performance Metrics</h2>
      <p>Team metrics aggregate individual agent data to provide a team-level view. Supervisors can compare team performance across channels, time periods, and departments using the Performance Comparison feature in Analytics.</p>
    `
  },

  // --- AUTOMATION ---
  'workflow': {
    title: 'Workflow Builder',
    category: 'Automation',
    readTime: '9 min read',
    updated: 'Last updated: 5 February 2025',
    prev: 'performance',
    next: 'auto-reply',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Sociomie Workflow Builder is a no-code automation engine that allows you to create complex business logic without writing a single line of code. Workflows can automate ticket routing, send notifications, update CRM records, and trigger external webhooks.</p>
      <div class="alert-box alert-success">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M7 10l2 2 4-4M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Enterprise Capacity</div>
          <div class="alert-text">Enterprise accounts can create up to 500 active workflows. Contact your Customer Success Manager to increase this limit.</div>
        </div>
      </div>

      <h2 id="workflow-components">Workflow Components</h2>
      <ul>
        <li><strong>Trigger</strong> — The event that starts the workflow</li>
        <li><strong>Conditions</strong> — Filters that determine when the workflow runs</li>
        <li><strong>Actions</strong> — What the workflow does when triggered</li>
      </ul>

      <h2 id="triggers">Available Triggers</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Trigger</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Ticket Created</td><td>Fires when a new ticket is created from any channel</td></tr>
            <tr><td>Ticket Updated</td><td>Fires when any ticket field is modified</td></tr>
            <tr><td>Status Changed</td><td>Fires on status transitions (e.g., Open → Resolved)</td></tr>
            <tr><td>Message Received</td><td>Fires when a new customer message arrives</td></tr>
            <tr><td>SLA Breached</td><td>Fires when first response or resolution SLA is exceeded</td></tr>
            <tr><td>Contact Tag Added</td><td>Fires when a tag is added to a contact</td></tr>
            <tr><td>Scheduled</td><td>Runs at a specified time or recurring interval</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="example-workflow">Example: VIP Auto-Escalation</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Workflow Configuration (JSON)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "name": "VIP Customer Auto-Escalation",
  "trigger": "ticket.created",
  "conditions": {
    "operator": "AND",
    "rules": [
      { "field": "contact.tags", "operator": "contains", "value": "VIP" },
      { "field": "ticket.priority", "operator": "equals", "value": "high" }
    ]
  },
  "actions": [
    { "type": "assign_team", "team_id": "team_premium_support" },
    { "type": "set_priority", "priority": "critical" },
    { "type": "add_tag", "tag": "auto-escalated" }
  ]
}</pre></div>
    `
  },

  'auto-reply': {
    title: 'Auto Reply Setup',
    category: 'Automation',
    readTime: '6 min read',
    updated: 'Last updated: 5 February 2025',
    prev: 'workflow',
    next: 'triggers',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Auto-replies allow Sociomie to automatically send predefined messages in response to customer interactions — such as a greeting when a new conversation starts, or an out-of-hours notice when no agents are available.</p>

      <h2 id="auto-reply-types">Types of Auto-Replies</h2>
      <ul>
        <li><strong>Welcome Message</strong> — Sent when a customer initiates a new conversation</li>
        <li><strong>Offline Message</strong> — Sent when no agents are available (outside business hours)</li>
        <li><strong>Acknowledgment</strong> — Confirms receipt of a message and sets response time expectations</li>
        <li><strong>CSAT Survey</strong> — Sent after ticket resolution to collect satisfaction ratings</li>
        <li><strong>Follow-up</strong> — Sent X hours after ticket creation if no agent has responded</li>
      </ul>

      <h2 id="setup">Setting Up Auto-Replies</h2>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><h4>Navigate to Settings</h4><p>Go to <strong>Settings → Automation → Auto Replies → Add Auto Reply</strong>.</p></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><h4>Select Channel & Event</h4><p>Choose which channel this applies to and which trigger event activates it.</p></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><h4>Write the Message</h4><p>Compose your auto-reply message. Use dynamic variables like <code>{{customer_name}}</code> and <code>{{ticket_id}}</code> for personalization.</p></div></div>
        <div class="step"><div class="step-num">4</div><div class="step-content"><h4>Set Business Hours</h4><p>If this is an offline message, configure the business hours schedule so it only sends outside active hours.</p></div></div>
      </div>
    `
  },

  'triggers': {
    title: 'Trigger Configuration',
    category: 'Automation',
    readTime: '5 min read',
    updated: 'Last updated: 5 February 2025',
    prev: 'auto-reply',
    next: 'rules',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Triggers are the starting points of Sociomie automations. Each trigger listens for a specific platform event and, when detected, initiates the associated workflow or action chain.</p>

      <h2 id="trigger-types">Trigger Categories</h2>
      <ul>
        <li><strong>Conversation Triggers</strong> — Events in the conversation lifecycle (created, assigned, resolved)</li>
        <li><strong>Message Triggers</strong> — Based on message content, keywords, or media type</li>
        <li><strong>Contact Triggers</strong> — Contact property changes or tag assignments</li>
        <li><strong>Time Triggers</strong> — Scheduled or delay-based (e.g., 2 hours after ticket creation)</li>
        <li><strong>SLA Triggers</strong> — Fired when response or resolution deadlines are approaching or breached</li>
      </ul>

      <h2 id="keyword-triggers">Keyword Triggers</h2>
      <p>Create keyword-based triggers to route or respond to messages containing specific words or phrases. For example, messages containing "refund" can be automatically routed to the billing team.</p>
      <div class="alert-box alert-info">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 9v5M10 7v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Keyword Matching</div>
          <div class="alert-text">Keyword matching is case-insensitive and supports exact match, contains, starts with, and regex patterns.</div>
        </div>
      </div>
    `
  },

  'rules': {
    title: 'Business Rules',
    category: 'Automation',
    readTime: '5 min read',
    updated: 'Last updated: 5 February 2025',
    prev: 'triggers',
    next: 'api-auth',
    body: `
      <h2 id="overview">Overview</h2>
      <p>Business Rules in Sociomie are condition-action pairs that execute automatically when tickets or contacts match defined criteria. Unlike full workflows, rules are simpler, single-step automations ideal for quick routing and categorization tasks.</p>

      <h2 id="rule-examples">Common Business Rules</h2>
      <ul>
        <li><strong>Priority Escalation</strong> — Set ticket priority to Critical if contact tag contains "VIP"</li>
        <li><strong>Auto-Category</strong> — Tag ticket as "billing" if message contains keywords like "invoice" or "payment"</li>
        <li><strong>Team Routing</strong> — Route to Technical Support team if ticket category is "Bug Report"</li>
        <li><strong>Auto-Close</strong> — Close tickets with status "Resolved" if no response from customer in 72 hours</li>
      </ul>

      <h2 id="rule-limits">Rule Limits</h2>
      <p>Business rules are evaluated in order. You can have up to 200 active business rules per workspace. Rules can be paused, reordered, and cloned from <strong>Settings → Automation → Business Rules</strong>.</p>
    `
  },

  // --- API ---
  'api-auth': {
    title: 'API Authentication',
    category: 'API Documentation',
    readTime: '7 min read',
    updated: 'Last updated: 10 January 2025',
    prev: 'rules',
    next: 'api-endpoints',
    body: `
      <h2 id="overview">Overview</h2>
      <p>The Sociomie REST API uses <strong>API Key authentication</strong> as the primary method for server-to-server integration. All API requests must be made over HTTPS. Requests made over plain HTTP will fail.</p>
      <div class="alert-box alert-danger">
        <div class="alert-icon"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M10 6v5M10 13.5v.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
        <div class="alert-content">
          <div class="alert-title">Security Warning</div>
          <div class="alert-text">Never expose your API keys in client-side code, public repositories, or logs. Treat API keys like passwords. Rotate immediately if compromised.</div>
        </div>
      </div>

      <h2 id="api-keys">Generating API Keys</h2>
      <p>Navigate to <strong>Settings → Integrations → API Keys</strong> to generate API keys. You can create multiple keys with different permission scopes (read-only, read-write, or admin).</p>

      <h2 id="authentication-header">Authentication Header</h2>
      <p>Include your API key in the <code>Authorization</code> header of every request:</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">HTTP Request</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>GET /api/v2/tickets HTTP/1.1
Host: app.sociomile.net
Authorization: Bearer smc_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
Accept: application/json</pre></div>

      <h2 id="base-url">Base URL</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Base URL</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>https://app.sociomile.net/api/v2/</pre></div>

      <h2 id="example-requests">Code Examples</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">JavaScript (fetch)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>const response = await fetch('https://app.sociomile.net/api/v2/tickets', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer smc_live_xxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data);</pre></div>

      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Python (requests)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>import requests

headers = {
    'Authorization': 'Bearer smc_live_xxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
}
response = requests.get(
    'https://app.sociomile.net/api/v2/tickets',
    headers=headers
)
print(response.json())</pre></div>

      <h2 id="error-codes">Error Codes</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Code</th><th>Status</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>401</code></td><td>Unauthorized</td><td>Missing or invalid API key</td></tr>
            <tr><td><code>403</code></td><td>Forbidden</td><td>API key lacks required permissions</td></tr>
            <tr><td><code>404</code></td><td>Not Found</td><td>Resource does not exist</td></tr>
            <tr><td><code>429</code></td><td>Too Many Requests</td><td>Rate limit exceeded (default: 1000 req/min)</td></tr>
            <tr><td><code>500</code></td><td>Internal Server Error</td><td>Sociomie platform error — contact support</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="rate-limiting">Rate Limiting</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Response Headers</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 987
X-RateLimit-Reset: 1706169600</pre></div>
    `
  },

  'api-endpoints': {
    title: 'API Endpoint Reference',
    category: 'API Documentation',
    readTime: '12 min read',
    updated: 'Last updated: 10 January 2025',
    prev: 'api-auth',
    next: 'api-request',
    body: `
      <h2 id="tickets">Tickets API</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="method-badge method-get">GET</span></td><td><code>/tickets</code></td><td>List all tickets (paginated)</td></tr>
            <tr><td><span class="method-badge method-get">GET</span></td><td><code>/tickets/:id</code></td><td>Get a single ticket by ID</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/tickets</code></td><td>Create a new ticket</td></tr>
            <tr><td><span class="method-badge method-put">PUT</span></td><td><code>/tickets/:id</code></td><td>Update ticket fields</td></tr>
            <tr><td><span class="method-badge method-delete">DELETE</span></td><td><code>/tickets/:id</code></td><td>Delete a ticket (admin only)</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/tickets/:id/assign</code></td><td>Assign ticket to agent/team</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/tickets/:id/resolve</code></td><td>Mark ticket as resolved</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="contacts">Contacts API</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="method-badge method-get">GET</span></td><td><code>/contacts</code></td><td>List contacts</td></tr>
            <tr><td><span class="method-badge method-get">GET</span></td><td><code>/contacts/:id</code></td><td>Get contact profile</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/contacts</code></td><td>Create contact</td></tr>
            <tr><td><span class="method-badge method-put">PUT</span></td><td><code>/contacts/:id</code></td><td>Update contact info</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/contacts/import</code></td><td>Bulk import contacts (CSV)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="messages">Messages API</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/messages/send</code></td><td>Send outbound message</td></tr>
            <tr><td><span class="method-badge method-get">GET</span></td><td><code>/messages/:ticket_id</code></td><td>Get messages in ticket</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/messages/template</code></td><td>Send template message</td></tr>
            <tr><td><span class="method-badge method-post">POST</span></td><td><code>/messages/broadcast</code></td><td>Send broadcast to segment</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="send-message-example">Send Message Request</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">POST /api/v2/messages/send</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "channel": "whatsapp",
  "to": "628123456789",
  "message": {
    "type": "text",
    "text": "Halo! Ada yang bisa kami bantu?"
  },
  "ticket_id": "TKT-2025-001234",
  "metadata": {
    "source": "crm_integration",
    "campaign_id": "WA_CAMPAIGN_JAN2025"
  }
}</pre></div>

      <h2 id="response-format">Standard Response Format</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">JSON Response</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "success": true,
  "data": {
    "message_id": "MSG-xxxxxxxx-xxxx-xxxx",
    "ticket_id": "TKT-2025-001234",
    "status": "sent",
    "channel": "whatsapp",
    "timestamp": "2025-01-22T08:30:00.000Z"
  },
  "meta": {
    "request_id": "REQ-xxxxxxxx",
    "processing_time_ms": 142
  }
}</pre></div>
    `
  },

  'api-request': {
    title: 'Request Examples',
    category: 'API Documentation',
    readTime: '8 min read',
    updated: 'Last updated: 10 January 2025',
    prev: 'api-endpoints',
    next: 'api-response',
    body: `
      <h2 id="create-ticket">Create a Ticket</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">POST /api/v2/tickets</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "subject": "Cannot access account",
  "channel": "email",
  "priority": "high",
  "category": "Account Issues",
  "contact": {
    "email": "customer@company.com",
    "name": "Budi Santoso"
  },
  "message": "I have been unable to log in since yesterday morning.",
  "assignee_team_id": "team_customer_support",
  "tags": ["login-issue", "enterprise"]
}</pre></div>

      <h2 id="list-tickets">List Tickets with Filters</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">GET /api/v2/tickets</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>GET /api/v2/tickets?status=open&priority=high&page=1&per_page=25
Authorization: Bearer smc_live_xxxxxxxxxxxxxxxx</pre></div>

      <h2 id="update-ticket">Update a Ticket</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">PUT /api/v2/tickets/:id</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "status": "resolved",
  "resolution_notes": "Issue resolved by resetting user password.",
  "tags": ["resolved", "password-reset"]
}</pre></div>

      <h2 id="webhook-example">Webhook Payload Example</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">POST (incoming webhook payload)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "event": "ticket.created",
  "timestamp": "2025-01-22T08:30:00.000Z",
  "workspace_id": "ws_xxxxxxxx",
  "data": {
    "ticket": {
      "id": "TKT-2025-001234",
      "subject": "Cannot access account",
      "status": "new",
      "priority": "high",
      "channel": "whatsapp",
      "created_at": "2025-01-22T08:29:58.000Z"
    },
    "contact": {
      "id": "con_xxxxxxxx",
      "name": "Budi Santoso",
      "phone": "628123456789"
    }
  }
}</pre></div>
    `
  },

  'api-response': {
    title: 'Response Formats',
    category: 'API Documentation',
    readTime: '5 min read',
    updated: 'Last updated: 10 January 2025',
    prev: 'api-request',
    next: 'faq',
    body: `
      <h2 id="overview">Overview</h2>
      <p>All Sociomie API responses follow a consistent JSON structure for predictable integration. Understanding the standard response format helps you build robust error handling in your integrations.</p>

      <h2 id="success-response">Success Response</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Success (HTTP 200)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 1250,
    "page": 1,
    "per_page": 25,
    "total_pages": 50,
    "request_id": "REQ-xxxxxxxx"
  }
}</pre></div>

      <h2 id="error-response">Error Response</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Error (HTTP 4xx / 5xx)</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Ticket with ID TKT-2025-999999 does not exist.",
    "status": 404,
    "request_id": "REQ-xxxxxxxx"
  }
}</pre></div>

      <h2 id="pagination">Pagination</h2>
      <p>List endpoints return paginated results. Use the <code>page</code> and <code>per_page</code> query parameters to navigate through large datasets. The default <code>per_page</code> is 25; the maximum is 100.</p>
    `
  },

  // --- FAQ ---
  'faq': {
    title: 'Frequently Asked Questions',
    category: 'FAQ',
    readTime: '10 min read',
    updated: 'Last updated: 1 February 2025',
    prev: 'api-response',
    next: 'faq-billing',
    body: `
      <h2 id="general">General Questions</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">What is Sociomie and who is it for?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie is an enterprise omni-channel customer engagement platform by Ivosight. It is designed for medium-to-large organizations in banking, telco, FMCG, retail, healthcare, and government sectors that handle high volumes of customer interactions across multiple digital channels. Sociomie consolidates WhatsApp, Instagram, Facebook, Telegram, TikTok, and Live Chat into one unified inbox.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">How many agents can use Sociomie simultaneously?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie scales to support any number of concurrent agents. Enterprise clients operate with teams ranging from 10 to 5,000+ agents on a single workspace. Agent seats are provisioned based on your subscription tier. Contact your Account Manager to add more seats.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Is Sociomie compliant with Indonesian data regulations (UU PDP)?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Yes. Sociomie is fully compliant with Indonesia's Personal Data Protection Law (UU PDP No. 27/2022). Customer data is processed and stored in Tier-3 certified data centers in Indonesia. We provide a Data Processing Agreement (DPA) for all enterprise clients. Sociomie is also SOC 2 Type II certified and ISO 27001 compliant.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">What is the platform uptime SLA?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie guarantees a 99.9% monthly uptime SLA for all enterprise subscriptions. Planned maintenance windows are communicated at least 72 hours in advance via email and status page (status.sociomile.net). Historical uptime reports are available in the Admin Portal.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Can Sociomie integrate with our existing CRM or ERP?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Absolutely. Sociomie provides a comprehensive REST API that supports integration with virtually any external system. We have pre-built connectors for Salesforce, SAP, Oracle, Microsoft Dynamics, HubSpot, and Zendesk. For custom integrations, our Professional Services team can develop tailored connectors.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Does Sociomie support single sign-on (SSO)?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Yes, Sociomie supports SAML 2.0 and OpenID Connect (OIDC) for single sign-on. This allows your team to log in using existing corporate credentials from providers such as Microsoft Azure AD, Okta, Google Workspace, and any SAML-compatible identity provider. SSO configuration is available in Settings → Security → SSO (Enterprise plan only).</div></div>
        </div>
      </div>

      <h2 id="technical">Technical Questions</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">What browsers are supported?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie supports the latest two versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. We recommend Chrome for the best performance. Internet Explorer is not supported. A minimum screen resolution of 1280×768 is required for the desktop agent interface.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Is there a mobile app for agents?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Yes! Sociomie has native mobile apps for iOS (App Store) and Android (Google Play). The mobile app allows agents to manage tickets, respond to customers, and receive push notifications on new assignments. Mobile apps are available to all Sociomie subscribers at no additional cost.</div></div>
        </div>
      </div>
    `
  },

  'faq-billing': {
    title: 'Billing & Pricing FAQ',
    category: 'FAQ',
    readTime: '5 min read',
    updated: 'Last updated: 1 February 2025',
    prev: 'faq',
    next: 'troubleshooting',
    body: `
      <h2 id="pricing">Pricing & Plans</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">How is Sociomie pricing structured?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie uses a seat-based pricing model for agent licenses, combined with channel add-ons and message volume pricing for WhatsApp (following Meta's conversation-based pricing). Enterprise contracts are negotiated annually. Contact our sales team at sales@ivosight.com for a customized quote.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">What payment methods are accepted?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Enterprise clients can pay via bank transfer (IDR or USD), virtual account, or corporate credit card. Invoices are issued monthly or annually based on your contract terms. All enterprise subscriptions include a purchase order (PO) workflow compatible with BUMN procurement requirements.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Is there a free trial?</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Sociomie offers a 14-day proof-of-concept (POC) period for qualified enterprise prospects. During the POC, you get full access to all features with dedicated onboarding support. Contact your Account Executive to arrange a POC environment.</div></div>
        </div>
      </div>
    `
  },

  'troubleshooting': {
    title: 'Troubleshooting Guide',
    category: 'Troubleshooting',
    readTime: '8 min read',
    updated: 'Last updated: 3 February 2025',
    prev: 'faq-billing',
    next: 'release-notes',
    body: `
      <h2 id="common-issues">Common Issues</h2>
      <p>This guide covers the most frequently reported issues and their solutions. Before contacting support, please check this guide first.</p>

      <h2 id="whatsapp-issues">WhatsApp Connection Issues</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">WhatsApp messages not appearing in Sociomie inbox</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">
            <p><strong>Possible causes:</strong></p>
            <ul style="list-style:disc; padding-left:1.5rem; margin-bottom:1rem;">
              <li>Webhook URL has changed or is unreachable</li>
              <li>WhatsApp Business Account (WABA) is paused or restricted by Meta</li>
              <li>Phone number quality rating dropped below threshold</li>
              <li>Firewall blocking incoming webhook requests</li>
            </ul>
            <p><strong>Solution:</strong></p>
            <ol style="list-style:decimal; padding-left:1.5rem;">
              <li>Go to Settings → Channels → WhatsApp and check connection status</li>
              <li>Verify webhook URL matches <code>https://app.sociomile.net/webhook/whatsapp</code></li>
              <li>Check your WhatsApp Business Manager for account restrictions</li>
              <li>Contact Sociomie support if the issue persists after 30 minutes</li>
            </ol>
          </div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Template messages showing "Failed to Send" status</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Template send failures are usually caused by: (1) sending to a number that has opted out of marketing messages, (2) template parameters not matching the approved format, or (3) the recipient's 24-hour customer service window has closed. Verify the template is approved in Meta Business Manager with status "Approved" before resending.</div></div>
        </div>
      </div>

      <h2 id="login-issues">Login & Access Issues</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Unable to log in — "Invalid credentials" error</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">First, try resetting your password using the "Forgot Password" link on the login page. If you use SSO, verify that your corporate identity provider is accessible. For persistent login issues, ask your workspace administrator to check if your account is active in Settings → Users.</div></div>
        </div>
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">2FA code not being accepted</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">TOTP codes expire every 30 seconds. Ensure your device's clock is synchronized (enable automatic time sync). If you've lost access to your authenticator app, use a backup recovery code. If no recovery codes are available, contact your workspace administrator to reset 2FA for your account.</div></div>
        </div>
      </div>

      <h2 id="performance-issues">Performance Issues</h2>
      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-trigger">
            <span class="faq-question">Sociomie is loading slowly</span>
            <span class="faq-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 3l3 4 3-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer"><div class="faq-answer-inner">Try these steps in order: (1) Clear browser cache and cookies, (2) Disable browser extensions, particularly ad blockers, (3) Check your network connection speed, (4) Try a different browser, (5) Check status.sociomile.net for any active incidents. If performance issues persist, contact support with your workspace subdomain and approximate time of the issue.</div></div>
        </div>
      </div>

      <h2 id="contact-support">Escalating to Support</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Support Ticket Template</span><button class="copy-btn"><svg viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M11.5 4V3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1H4" stroke="currentColor" stroke-width="1.3"/></svg>Copy</button></div><pre>Workspace: [your-company].sociomile.net
Affected feature: [e.g., WhatsApp channel, Login, API]
Error message: [exact error text or screenshot]
First occurred: [date and time, include timezone]
Frequency: [Always / Intermittent / Once]
Steps to reproduce: [numbered list]
Impact: [Number of users / tickets affected]</pre></div>
    `
  },

  'release-notes': {
    title: 'Release Notes',
    category: 'Release Notes',
    readTime: '6 min read',
    updated: 'Last updated: 1 February 2025',
    prev: 'troubleshooting',
    next: null,
    body: `
      <h2 id="latest">Latest Releases</h2>

      <div class="release-entry">
        <div class="release-version-header">
          <span class="release-version">v3.5.0</span>
          <span class="release-badge major">Major Release</span>
          <span class="release-date">1 February 2025</span>
        </div>
        <div class="release-changes">
          <div class="release-change-group">
            <h4>✨ New Features</h4>
            <div class="release-change-list">
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>TikTok Integration</strong> — Connect TikTok Business accounts to receive and respond to DMs and comments directly from Sociomie</span></div>
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>AI Suggested Replies</strong> — Context-aware reply suggestions powered by Ivosight AI</span></div>
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>Advanced Analytics v2</strong> — Rebuilt analytics engine with real-time streaming data and funnel visualization</span></div>
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>LDAP/AD Sync</strong> — Native Active Directory synchronization for enterprise user provisioning</span></div>
            </div>
          </div>
          <div class="release-change-group">
            <h4>🔧 Improvements</h4>
            <div class="release-change-list">
              <div class="release-change change-improve"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>WhatsApp message templates now support video and document headers</span></div>
              <div class="release-change change-improve"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Workflow Builder: Added support for nested conditions (AND within OR logic)</span></div>
              <div class="release-change change-improve"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Inbox loading time reduced by 40% through optimized message pagination</span></div>
            </div>
          </div>
          <div class="release-change-group">
            <h4>🐛 Bug Fixes</h4>
            <div class="release-change-list">
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Fixed: SLA timer not pausing correctly when ticket status set to Pending</span></div>
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Fixed: CSV export failing for reports containing more than 50,000 rows</span></div>
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Fixed: Telegram bot not forwarding file attachments larger than 5MB</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="release-entry">
        <div class="release-version-header">
          <span class="release-version">v3.4.2</span>
          <span class="release-badge patch">Patch</span>
          <span class="release-date">15 January 2025</span>
        </div>
        <div class="release-changes">
          <div class="release-change-group">
            <h4>🐛 Bug Fixes</h4>
            <div class="release-change-list">
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Security patch: Fixed XSS vulnerability in custom field rendering (CVE-2025-0114)</span></div>
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Fixed: Dashboard CSAT widget showing incorrect values for timezone offset +8</span></div>
              <div class="release-change change-fix"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span>Fixed: Auto-reply not triggering for Instagram Story replies</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="release-entry">
        <div class="release-version-header">
          <span class="release-version">v3.4.0</span>
          <span class="release-badge major">Major Release</span>
          <span class="release-date">2 January 2025</span>
        </div>
        <div class="release-changes">
          <div class="release-change-group">
            <h4>✨ New Features</h4>
            <div class="release-change-list">
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>Chatbot Builder</strong> — Visual drag-and-drop chatbot designer with decision trees and API integrations</span></div>
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>WhatsApp Catalog Integration</strong> — Product catalog sharing directly within WhatsApp conversations</span></div>
              <div class="release-change change-new"><div class="release-change-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><span><strong>Team Performance Leaderboard</strong> — Gamified agent rankings to motivate high performance</span></div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

// ========== STATE ==========
const state = {
  currentArticle: null,
  darkMode: false,
  bookmarks: [],
  recentlyViewed: [],
  searchIndex: [],
  ratings: {}
};

// ========== SIDEBAR OVERLAY (created once at module level) ==========
// Created here so both setupMobileSidebar and closeSidebar can reference it
let _sidebarOverlay = null;

function getSidebarOverlay() {
  if (!_sidebarOverlay) {
    _sidebarOverlay = document.createElement('div');
    _sidebarOverlay.id = 'sidebarOverlay';
    _sidebarOverlay.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'background:rgba(8,13,26,0.45)',
      'z-index:799',
      'backdrop-filter:blur(3px)',
      '-webkit-backdrop-filter:blur(3px)',
      'opacity:0',
      'transition:opacity 220ms cubic-bezier(0.4,0,0.2,1)'
    ].join(';');
    document.body.appendChild(_sidebarOverlay);

    _sidebarOverlay.addEventListener('click', closeMobileSidebar);
  }
  return _sidebarOverlay;
}

function openMobileSidebar() {
  const sidebar = document.getElementById('docSidebar');
  if (!sidebar) return;
  const overlay = getSidebarOverlay();
  sidebar.classList.add('mobile-open');
  overlay.style.display = 'block';
  requestAnimationFrame(() => { overlay.style.opacity = '1'; });
  document.body.style.overflow = 'hidden';
  const toggle = document.getElementById('sidebarToggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('docSidebar');
  if (!sidebar) return;
  const overlay = getSidebarOverlay();
  sidebar.classList.remove('mobile-open');
  overlay.style.opacity = '0';
  setTimeout(() => { overlay.style.display = 'none'; }, 220);
  document.body.style.overflow = '';
  const toggle = document.getElementById('sidebarToggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

// ========== INITIALIZATION ==========
function init() {
  loadFromStorage();
  buildSearchIndex();
  injectDynamicStyles();
  setupEventListeners();
  setupMobileNavLinks();
  updateRecentlyViewed();
  applyTheme();
}

function loadFromStorage() {
  try {
    const dm = localStorage.getItem('smc_darkMode');
    state.darkMode = dm === 'true';

    const bm = localStorage.getItem('smc_bookmarks');
    state.bookmarks = bm ? JSON.parse(bm) : [];

    const rv = localStorage.getItem('smc_recentlyViewed');
    state.recentlyViewed = rv ? JSON.parse(rv) : [];

    const rt = localStorage.getItem('smc_ratings');
    state.ratings = rt ? JSON.parse(rt) : {};
  } catch (e) {
    console.warn('SMC: Failed to load from storage:', e);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem('smc_darkMode', state.darkMode);
    localStorage.setItem('smc_bookmarks', JSON.stringify(state.bookmarks));
    localStorage.setItem('smc_recentlyViewed', JSON.stringify(state.recentlyViewed));
    localStorage.setItem('smc_ratings', JSON.stringify(state.ratings));
  } catch (e) {
    console.warn('SMC: Failed to save to storage:', e);
  }
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
}

function buildSearchIndex() {
  state.searchIndex = Object.entries(ARTICLES).map(([id, art]) => {
    const plainBody = art.body
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return {
      id,
      title: art.title,
      category: art.category,
      excerpt: plainBody.substring(0, 300)
    };
  });
}

// Inject dynamic CSS for sidebar collapse (avoids conflict with existing CSS transitions)
function injectDynamicStyles() {
  const style = document.createElement('style');
  style.id = 'smc-dynamic-styles';
  style.textContent = `
    .doc-sidebar {
      transition: width 280ms cubic-bezier(0.4,0,0.2,1),
                  border-color var(--transition-slow, 350ms),
                  transform var(--transition-slow, 350ms);
    }
    .doc-sidebar.collapsed {
      width: 0 !important;
      overflow: hidden;
      border-right-color: transparent;
    }
    @supports selector(:has(*)) {
      .article-layout:has(.doc-sidebar.collapsed) {
        grid-template-columns: 0 1fr var(--toc-width, 220px);
      }
    }
    @media (max-width: 1280px) {
      @supports selector(:has(*)) {
        .article-layout:has(.doc-sidebar.collapsed) {
          grid-template-columns: 0 1fr;
        }
      }
    }
    @media (max-width: 768px) {
      .doc-sidebar.collapsed {
        width: var(--sidebar-width) !important;
        overflow: visible;
        border-right-color: var(--color-border);
      }
    }

    /* Fallback for browsers without :has() support */
    .article-layout.sidebar-collapsed {
      grid-template-columns: 0 1fr var(--toc-width, 220px);
    }
    @media (max-width: 1280px) {
      .article-layout.sidebar-collapsed {
        grid-template-columns: 0 1fr;
      }
    }
    @media (max-width: 768px) {
      .article-layout.sidebar-collapsed {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  // Dark mode
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

  // Bookmarks nav button — single listener here, no IIFE duplicate
  const bookmarksNavBtn = document.getElementById('bookmarksNavBtn');
  if (bookmarksNavBtn) {
    bookmarksNavBtn.addEventListener('click', () => {
      const panel = document.getElementById('bookmarksPanel');
      if (panel.classList.contains('active')) {
        closeBookmarks();
      } else {
        openBookmarks();
      }
    });
  }

  // Bookmarks panel close button
  document.getElementById('bookmarksClose').addEventListener('click', closeBookmarks);

  // Scroll events
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Back to top
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu
  setupMobileMenu();

  // Search
  setupSearch();

  // Popular tags
  document.querySelectorAll('.popular-tag').forEach(tag => {
    tag.addEventListener('click', () => openSearch(tag.dataset.query));
  });

  // Hero search button
  const heroSearchBtn = document.querySelector('.hero-search-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      openSearch(document.getElementById('heroSearchInput').value.trim());
    });
  }

  // Hero search — Enter key
  document.getElementById('heroSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') openSearch(e.target.value.trim());
  });

  // Keyboard shortcuts overlay close
  document.getElementById('shortcutsClose').addEventListener('click', closeShortcuts);

  // Global keyboard shortcuts
  document.addEventListener('keydown', handleKeyboard);

  // Nav links
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleNavClick(link.dataset.section);
    });
  });

  // Sidebar toggle button
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', handleSidebarToggle);
  }

  // Sidebar nav — close on mobile when a link is clicked
  // Use event delegation; sidebarNav always exists in DOM even when hidden
  document.getElementById('sidebarNav').addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && e.target.classList.contains('sidebar-link')) {
      closeMobileSidebar();
    }
  });

  // Smooth scroll for in-page anchor links
  // IMPORTANT: exclude href="#" (bare hash) which is used by navigation links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#') return; // Let inline onclick handlers deal with bare # links
    const id = href.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      scrollToHeading(id);
    }
  });
}

// ========== MOBILE NAV LINKS ==========
// Wire up the mobile menu navigation links (they were empty `href="#"` with no handlers)
function setupMobileNavLinks() {
  const mobileNavMap = [
    { text: 'Documentation', section: 'home' },
    { text: 'Product Guide', section: 'guide' },
    { text: 'API', section: 'api' },
    { text: 'Release Notes', section: 'release' },
    { text: 'FAQ', section: 'faq' },
    { text: 'Contact Support', section: 'support' }
  ];

  document.querySelectorAll('.mobile-nav-link').forEach((link, i) => {
    const map = mobileNavMap[i];
    if (!map) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenuFn();
      handleNavClick(map.section);
    });
  });
}

// ========== MOBILE MENU ==========
let closeMobileMenuFn = () => {};

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.style.display = 'block';
    requestAnimationFrame(() => mobileOverlay.classList.add('active'));
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  let _mobileMenuCloseTimer = null;
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    clearTimeout(_mobileMenuCloseTimer);
    _mobileMenuCloseTimer = setTimeout(() => { mobileOverlay.style.display = ''; }, 300);
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Expose so mobile nav links can call it
  closeMobileMenuFn = closeMobileMenu;

  mobileMenuBtn.addEventListener('click', openMobileMenu);
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
}

// ========== SIDEBAR TOGGLE ==========
function handleSidebarToggle() {
  const sidebar = document.getElementById('docSidebar');
  if (!sidebar) return;

  if (window.innerWidth <= 768) {
    // Mobile: slide in/out
    if (sidebar.classList.contains('mobile-open')) {
      closeMobileSidebar();
    } else {
      openMobileSidebar();
    }
  } else {
    // Desktop: collapse/expand
    const isCollapsed = sidebar.classList.contains('collapsed');
    sidebar.classList.toggle('collapsed', !isCollapsed);
    const layout = document.querySelector('.article-layout');
    if (layout) layout.classList.toggle('sidebar-collapsed', !isCollapsed);
    const toggle = document.getElementById('sidebarToggle');
    if (toggle) toggle.setAttribute('aria-expanded', isCollapsed ? 'true' : 'false');
  }
}

// ========== SEARCH ==========
function setupSearch() {
  // Nav search box — clicking anywhere opens modal
  document.getElementById('navSearchBox').addEventListener('click', () => openSearch());

  // Nav search input — redirect focus to modal
  const navInput = document.getElementById('navSearchInput');
  navInput.addEventListener('focus', () => {
    navInput.blur();
    openSearch();
  });
  navInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') {
      e.preventDefault();
      openSearch();
    }
  });

  // Global search modal input
  document.getElementById('globalSearchInput').addEventListener('input', handleGlobalSearch);
  document.getElementById('globalSearchInput').addEventListener('keydown', handleSearchKeydown);

  // Close button
  document.getElementById('searchCloseBtn').addEventListener('click', closeSearch);

  // Click backdrop to close
  document.getElementById('searchOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('searchOverlay')) closeSearch();
  });
}

// ========== DARK MODE ==========
function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  applyTheme();
  saveToStorage();
  showToast(state.darkMode ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
}

// ========== NAV CLICK ==========
function handleNavClick(section) {
  const sectionMap = {
    faq: 'faq',
    api: 'api-auth',
    release: 'release-notes',
    guide: 'introduction',
    home: null,
    support: null  // "Contact Support" — no dedicated page, could open email or chat
  };

  if (section === 'support') {
    window.location.href = 'mailto:support@sociomile.net';
    return;
  }

  const target = sectionMap[section];
  if (target) loadArticle(target);
  else showHome();

  // Update active nav link (only when called from nav, not from showHome/loadArticle directly)
  if (section) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === section);
    });
  }
}

// ========== SCROLL HANDLING ==========
function handleScroll() {
  const scrollY = window.scrollY;

  // Navbar shadow
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20);

  // Back to top visibility
  document.getElementById('backToTop').classList.toggle('visible', scrollY > 400);

  // Reading progress bar
  const progress = document.getElementById('reading-progress');
  if (state.currentArticle) {
    const docHeight = Math.max(
      document.documentElement.scrollHeight - window.innerHeight, 1
    );
    progress.style.transform = `scaleX(${Math.min(scrollY / docHeight, 1)})`;
  } else {
    progress.style.transform = 'scaleX(0)';
  }

  // TOC highlight
  if (state.currentArticle) updateTocActive();
}

// ========== SEARCH LOGIC ==========
let searchTimeout = null;
let selectedResultIndex = -1;

function openSearch(preQuery = '') {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('globalSearchInput');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    input.focus();
    if (preQuery) {
      input.value = preQuery;
      handleGlobalSearch();
    }
  }, 50);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('globalSearchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
  document.getElementById('heroSearchInput').value = '';
  selectedResultIndex = -1;
}

function handleGlobalSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const query = document.getElementById('globalSearchInput').value.trim().toLowerCase();
    const container = document.getElementById('searchResults');
    selectedResultIndex = -1;

    if (query.length < 2) {
      container.innerHTML = '';
      return;
    }

    const results = state.searchIndex
      .filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
      )
      .slice(0, 8);

    if (results.length === 0) {
      container.innerHTML = `<div class="search-no-results">No results found for "<strong>${escapeHtml(query)}</strong>".<br>Try different keywords or browse the categories below.</div>`;
      return;
    }

    container.innerHTML = results.map(r => `
      <div class="search-result-item" data-article="${r.id}" role="option" tabindex="-1">
        <div class="search-result-icon">
          <svg viewBox="0 0 16 16" fill="none"><path d="M3 2h10a1 1 0 011 1v11l-3-1.5L8 14l-3 1.5L2 14V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.3"/></svg>
        </div>
        <div class="search-result-info">
          <div class="search-result-cat">${escapeHtml(r.category)}</div>
          <div class="search-result-title">${highlightText(r.title, query)}</div>
          <div class="search-result-excerpt">${highlightText(r.excerpt.substring(0, 120) + '…', query)}</div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => selectSearchResult(item.dataset.article));
    });
  }, 120);
}

function handleSearchKeydown(e) {
  const items = document.querySelectorAll('.search-result-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedResultIndex = Math.min(selectedResultIndex + 1, items.length - 1);
    updateSelectedResult(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedResultIndex = Math.max(selectedResultIndex - 1, -1);
    updateSelectedResult(items);
  } else if (e.key === 'Enter' && selectedResultIndex >= 0 && items[selectedResultIndex]) {
    selectSearchResult(items[selectedResultIndex].dataset.article);
  }
}

function updateSelectedResult(items) {
  items.forEach((item, i) => item.classList.toggle('active', i === selectedResultIndex));
  if (selectedResultIndex >= 0 && items[selectedResultIndex]) {
    items[selectedResultIndex].scrollIntoView({ block: 'nearest' });
  }
}

function selectSearchResult(articleId) {
  closeSearch();
  loadArticle(articleId);
}

function highlightText(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escapeHtml(text).replace(
    new RegExp(`(${escaped})`, 'gi'),
    '<mark class="search-highlight">$1</mark>'
  );
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ========== ARTICLE LOADING ==========
function loadArticle(articleId) {
  const article = ARTICLES[articleId];
  if (!article) { showHome(); return; }

  state.currentArticle = articleId;

  // Page swap
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('articlePage').style.display = 'block';

  // Populate
  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleReadTime').textContent = article.readTime;
  document.getElementById('articleUpdated').textContent = article.updated;
  document.getElementById('articleCategoryBadge').textContent = article.category;
  document.getElementById('articleBody').innerHTML = article.body;
  document.getElementById('bcCategory').textContent = article.category;
  document.getElementById('bcTitle').textContent = article.title;
  document.title = `${article.title} — Sociomie Docs`;

  // Sidebar active link
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.toggle('active', link.dataset.article === articleId);
  });
  const activeLink = document.querySelector('.sidebar-link.active');
  if (activeLink) activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  // Bookmark button state
  updateBookmarkButton(articleId);

  // Prev/Next
  setupArticleNav(article);

  // TOC
  buildToc();

  // Rating widget reset
  resetRatingWidget(articleId);

  // Recently viewed
  addToRecentlyViewed(articleId, article);

  // Scroll to top
  scrollToTop();

  // Reset progress bar
  document.getElementById('reading-progress').style.transform = 'scaleX(0)';

  // Init interactive elements
  initCodeBlocks();
  initFaqAccordions();

  // Close mobile sidebar if open
  closeMobileSidebar();
}

function scrollToTop() {
  // Use scrollTo(0,0) for true instant jump; 'instant' is not universally supported
  window.scrollTo(0, 0);
}

function resetRatingWidget(articleId) {
  const ratingThanks = document.getElementById('ratingThanks');
  const ratingButtons = document.querySelectorAll('.rating-btn');

  // Always reset display first
  ratingThanks.style.display = 'none';
  ratingThanks.style.opacity = '';
  ratingThanks.style.transition = '';
  ratingButtons.forEach(b => {
    b.style.display = '';
    b.style.opacity = '';
    b.style.transition = '';
    b.disabled = false;
    b.classList.remove('selected');
  });

  // If already rated for this article, show thanks and hide buttons
  if (state.ratings[articleId] !== undefined) {
    ratingThanks.style.display = 'block';
    ratingButtons.forEach(b => { b.style.display = 'none'; });
  }
}

function setupArticleNav(article) {
  const prevBtn = document.getElementById('prevArticleBtn');
  const nextBtn = document.getElementById('nextArticleBtn');

  prevBtn.style.visibility = (article.prev && ARTICLES[article.prev]) ? 'visible' : 'hidden';
  nextBtn.style.visibility = (article.next && ARTICLES[article.next]) ? 'visible' : 'hidden';

  if (article.prev && ARTICLES[article.prev]) {
    document.getElementById('prevTitle').textContent = ARTICLES[article.prev].title;
  }
  if (article.next && ARTICLES[article.next]) {
    document.getElementById('nextTitle').textContent = ARTICLES[article.next].title;
  }
}

function navigateArticle(dir) {
  const art = ARTICLES[state.currentArticle];
  if (!art) return;
  const target = dir === 'prev' ? art.prev : art.next;
  if (target) loadArticle(target);
}

// ========== TABLE OF CONTENTS ==========
function buildToc() {
  const body = document.getElementById('articleBody');
  const headings = body.querySelectorAll('h2, h3');
  const tocNav = document.getElementById('tocNav');

  if (headings.length === 0) {
    tocNav.innerHTML = '<p style="font-size:12px;color:var(--color-text-muted);padding:var(--space-3)">No sections</p>';
    return;
  }

  // Ensure all headings have IDs before building TOC
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }
  });

  tocNav.innerHTML = Array.from(headings).map(h => {
    const isH3 = h.tagName === 'H3';
    return `<a href="#${h.id}" class="toc-link${isH3 ? ' toc-h3' : ''}" data-target="${h.id}">${escapeHtml(h.textContent)}</a>`;
  }).join('');

  tocNav.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToHeading(link.dataset.target);
    });
  });
}

function scrollToHeading(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
  ) || 64;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navHeight - 24, behavior: 'smooth' });
}

function updateTocActive() {
  const headings = document.querySelectorAll('#articleBody h2, #articleBody h3');
  const tocLinks = document.querySelectorAll('.toc-link');
  let activeId = null;
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
  ) || 64;
  const threshold = navHeight + 24;

  headings.forEach(h => {
    if (h.getBoundingClientRect().top <= threshold) activeId = h.id;
  });

  tocLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === activeId);
  });
}

// ========== HOME ==========
function showHome() {
  state.currentArticle = null;
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('articlePage').style.display = 'none';
  document.title = 'Sociomie Documentation Center';
  document.getElementById('reading-progress').style.transform = 'scaleX(0)';
  scrollToTop();
  updateRecentlyViewed();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === 'home');
  });
}

// ========== RECENTLY VIEWED ==========
function addToRecentlyViewed(id, article) {
  state.recentlyViewed = state.recentlyViewed.filter(item => item.id !== id);
  state.recentlyViewed.unshift({ id, title: article.title, category: article.category });
  if (state.recentlyViewed.length > 8) state.recentlyViewed = state.recentlyViewed.slice(0, 8);
  saveToStorage();
}

function updateRecentlyViewed() {
  const section = document.getElementById('recentlyViewedSection');
  const list = document.getElementById('recentlyList');

  if (state.recentlyViewed.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  // Show up to 4 on home page (stored max is 8 — consistent by design)
  list.innerHTML = state.recentlyViewed.slice(0, 4).map(item => `
    <a class="recently-item" href="#" data-article="${item.id}" aria-label="View ${escapeHtml(item.title)}">
      <svg class="recently-icon" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.3"/>
        <path d="M7 4v3.5l2 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
      </svg>
      <span class="recently-title">${escapeHtml(item.title)}</span>
      <span class="recently-cat">${escapeHtml(item.category)}</span>
    </a>
  `).join('');

  list.querySelectorAll('.recently-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      loadArticle(item.dataset.article);
    });
  });
}

// ========== BOOKMARKS ==========
function toggleBookmark() {
  const id = state.currentArticle;
  if (!id) return;

  const article = ARTICLES[id];
  const existingIdx = state.bookmarks.findIndex(b => b.id === id);

  if (existingIdx >= 0) {
    state.bookmarks.splice(existingIdx, 1);
    showToast('Bookmark removed');
  } else {
    state.bookmarks.unshift({ id, title: article.title, category: article.category });
    showToast('📌 Article bookmarked');
  }

  saveToStorage();
  updateBookmarkButton(id);
  renderBookmarks();
}

function updateBookmarkButton(id) {
  const btn = document.getElementById('bookmarkBtn');
  const label = document.getElementById('bookmarkLabel');
  if (!btn || !label) return;
  const isBookmarked = state.bookmarks.some(b => b.id === id);
  btn.classList.toggle('active', isBookmarked);
  label.textContent = isBookmarked ? 'Bookmarked' : 'Bookmark';
}

function openBookmarks() {
  renderBookmarks();
  const panel = document.getElementById('bookmarksPanel');
  panel.classList.add('active');
  panel.setAttribute('aria-hidden', 'false');
}

function closeBookmarks() {
  const panel = document.getElementById('bookmarksPanel');
  panel.classList.remove('active');
  panel.setAttribute('aria-hidden', 'true');
}

function renderBookmarks() {
  const list = document.getElementById('bookmarksList');
  if (state.bookmarks.length === 0) {
    list.innerHTML = '<p class="bookmarks-empty">No bookmarks yet. Click the bookmark button on any article to save it.</p>';
    return;
  }

  list.innerHTML = state.bookmarks.map(b => `
    <div class="bookmark-item">
      <div class="bookmark-item-content" data-article="${b.id}" style="flex:1;cursor:pointer;">
        <div class="bookmark-item-title">${escapeHtml(b.title)}</div>
        <div style="font-size:11.5px;color:var(--color-text-muted);margin-top:2px;">${escapeHtml(b.category)}</div>
      </div>
      <button class="bookmark-item-remove" data-id="${b.id}" aria-label="Remove bookmark">
        <svg viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      </button>
    </div>
  `).join('');

  list.querySelectorAll('.bookmark-item-content').forEach(el => {
    el.addEventListener('click', () => {
      loadArticle(el.dataset.article);
      closeBookmarks();
    });
  });

  list.querySelectorAll('.bookmark-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeBookmark(btn.dataset.id);
    });
  });
}

function removeBookmark(id) {
  state.bookmarks = state.bookmarks.filter(b => b.id !== id);
  saveToStorage();
  renderBookmarks();
  if (state.currentArticle === id) updateBookmarkButton(id);
  showToast('Bookmark removed');
}

// ========== CODE BLOCKS ==========
function initCodeBlocks() {
  document.querySelectorAll('#articleBody .copy-btn').forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', function () { copyCode(this); });
  });
}

function copyCode(btn) {
  const pre = btn.closest('.code-block')?.querySelector('pre');
  if (!pre) return;
  const text = pre.textContent;
  const originalHTML = btn.innerHTML;

  const onSuccess = () => showCopied(btn, originalHTML);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
      fallbackCopy(text);
      onSuccess();
    });
  } else {
    fallbackCopy(text);
    onSuccess();
  }
}

function showCopied(btn, originalHTML) {
  btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Copied!`;
  btn.style.color = '#10B981';
  setTimeout(() => { btn.innerHTML = originalHTML; btn.style.color = ''; }, 2000);
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.cssText = 'position:fixed;opacity:0;top:0;left:0;pointer-events:none;';
  document.body.appendChild(textarea);
  textarea.select();
  try { document.execCommand('copy'); } catch (_) {}
  document.body.removeChild(textarea);
}

// ========== FAQ ACCORDION ==========
function initFaqAccordions() {
  document.querySelectorAll('#articleBody .faq-item').forEach(item => {
    item.classList.remove('active');
    const answer = item.querySelector('.faq-answer');
    if (answer) answer.style.maxHeight = '0';

    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      const newTrigger = trigger.cloneNode(true);
      trigger.parentNode.replaceChild(newTrigger, trigger);
      newTrigger.addEventListener('click', () => toggleFaq(newTrigger));
    }
  });
}

function toggleFaq(triggerBtn) {
  const item = triggerBtn.closest('.faq-item');
  if (!item) return;

  const isActive = item.classList.contains('active');
  const answer = item.querySelector('.faq-answer');
  const answerInner = item.querySelector('.faq-answer-inner');

  // Close siblings
  item.parentElement.querySelectorAll('.faq-item').forEach(sibling => {
    if (sibling !== item) {
      sibling.classList.remove('active');
      const sibAnswer = sibling.querySelector('.faq-answer');
      if (sibAnswer) sibAnswer.style.maxHeight = '0';
    }
  });

  // Toggle current
  if (isActive) {
    item.classList.remove('active');
    if (answer) answer.style.maxHeight = '0';
  } else {
    item.classList.add('active');
    if (answer && answerInner) {
      answer.style.maxHeight = (answerInner.scrollHeight + 32) + 'px';
    }
  }
}

// ========== ARTICLE RATING ==========
function rateArticle(helpful) {
  const id = state.currentArticle;
  if (!id) return;

  state.ratings[id] = helpful;
  saveToStorage();

  const ratingThanks = document.getElementById('ratingThanks');
  const ratingButtons = document.querySelectorAll('.rating-btn');

  ratingButtons.forEach(b => {
    b.style.opacity = '0';
    b.style.transition = 'opacity 0.2s ease';
    b.disabled = true;
  });

  setTimeout(() => {
    ratingButtons.forEach(b => { b.style.display = 'none'; });
    ratingThanks.style.display = 'block';
    ratingThanks.style.opacity = '0';
    ratingThanks.style.transition = 'opacity 0.3s ease';
    requestAnimationFrame(() => { ratingThanks.style.opacity = '1'; });
  }, 220);

  showToast(helpful ? '👍 Thanks for your feedback!' : '👎 Feedback received. We\'ll improve this article.');
}

// ========== COPY PAGE LINK ==========
function copyPageLink() {
  const url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => showToast('🔗 Link copied to clipboard'));
  } else {
    fallbackCopy(url);
    showToast('🔗 Link copied to clipboard');
  }
}

// ========== KEYBOARD SHORTCUTS ==========
function handleKeyboard(e) {
  const target = e.target;
  const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

  // ESC — close any open modal/panel
  if (e.key === 'Escape') {
    if (document.getElementById('searchOverlay').classList.contains('active')) return closeSearch();
    if (document.getElementById('shortcutsOverlay').classList.contains('active')) return closeShortcuts();
    if (document.getElementById('bookmarksPanel').classList.contains('active')) return closeBookmarks();
    return;
  }

  if (isInput) return;

  const isMac = /mac/i.test(navigator.platform);
  const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

  if ((cmdOrCtrl && e.key === 'k') || e.key === '/') {
    e.preventDefault();
    openSearch();
    return;
  }
  if (cmdOrCtrl && e.key === 'd') {
    e.preventDefault();
    toggleDarkMode();
    return;
  }
  if (cmdOrCtrl && e.key === 'b') {
    e.preventDefault();
    document.getElementById('bookmarksPanel').classList.contains('active')
      ? closeBookmarks()
      : openBookmarks();
    return;
  }
  if (e.key === '?') {
    e.preventDefault();
    openShortcuts();
  }
}

// ========== SHORTCUTS OVERLAY ==========
function openShortcuts() {
  const overlay = document.getElementById('shortcutsOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeShortcuts() {
  const overlay = document.getElementById('shortcutsOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
}

// ========== TOAST ==========
let toastTimeout = null;

function showToast(message, duration = 2800) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('active'), duration);
}

// ========== LAUNCH ==========
document.addEventListener('DOMContentLoaded', init);

// ========== GLOBAL SCOPE EXPORTS ==========
// Required for inline onclick handlers in HTML
window.loadArticle     = loadArticle;
window.showHome        = showHome;
window.toggleBookmark  = toggleBookmark;
window.navigateArticle = navigateArticle;
window.rateArticle     = rateArticle;
window.copyPageLink    = copyPageLink;
window.openBookmarks   = openBookmarks;
window.closeBookmarks  = closeBookmarks;