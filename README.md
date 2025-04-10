# Project Structure

```
src/
├── app/
│   ├── (admin)/
│   │   ├── companies/
│   │   │   ├── [id]/
│   │   │   │   ├── not-found.tsx     # Component for handling not found companies
│   │   │   │   └── page.tsx          # Company page by ID
│   │   │   ├── page.tsx              # Companies list page
│   │   ├── dashboard/                # Admin dashboard
│   │   │   ├── error.tsx             # Component for handling errors on the dashboard
│   │   │   └── page.tsx              # Main page of the admin dashboard
│   │   └── layout.tsx                # General layout for the admin section
│   ├── components/                   # Reusable components (UI, Layout, Features)
│   │   ├── add-company-button.tsx    # Button for adding a company
│   │   ├── button.tsx                # General button component
│   │   ├── company-form-modal.tsx    # Modal for the company form
│   │   ├── company-form.tsx          # Form for editing/adding a company
│   │   ├── company-row.tsx           # Row for displaying company information
│   │   ├── company-table.tsx         # Table for displaying the list of companies
│   │   ├── header.tsx                # Page header
│   │   ├── input-field.tsx           # Input field component
│   │   ├── logo-uploader.tsx         # Component for uploading a logo
│   │   ├── magic-button.tsx          # Special button with animation
│   │   ├── modal.tsx                 # General modal component
│   │   ├── search-input.tsx          # Search input field
│   │   ├── sidebar-item.tsx          # Sidebar item
│   │   ├── sidebar.tsx               # Navigation sidebar
│   │   ├── status-label.tsx          # Component for displaying status
│   │   └── toolbar.tsx               # Toolbar component
│   ├── global-error.tsx              # Global component for error handling
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # General layout for the application
│   └── page.tsx                      # Main page of the application


```
