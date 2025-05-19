import { Typography, Divider, Avatar, Card, CardContent, Box, Button } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import { PageHeaderWrapper } from "../../../components/ui/wrapper/pageHeader";
import { BreadCrumbCustom } from "../../../components/ui/breadCrumb";
import { Link as RouterLink } from "react-router-dom";

const noticeDetail = {
  expiryDate: "18 - Nov - 2025",
  visibleTo: "Unit | B101",
  approvedBy: "--",
  approvedOn: "12 - May - 2025",
  postedOn: "01 - May - 2025",
  title: "Maintenance Due Notice – Fortune Heights",
  recipient: "Mr. Sharma (Flat 3B)",
  body: `This is a reminder that your maintenance dues for April and May 2025 (₹5,000 total) remain unpaid. Despite our previous reminder, we have not received your payment yet.`,
  followUp: `Please settle the dues by 10th May 2025 to avoid a late fee of ₹200 and possible restriction of common area access.`,
  images: [
    "https://via.placeholder.com/400x300.png?text=Notice+1",
    "https://via.placeholder.com/400x300.png?text=Notice+2",
  ],
  senderName: "Anil Mehta",
  senderTitle: "Secretary, Fortune Heights",
  phone: "9876543210",
  email: "greenwood.society@gmail.com",
};

export default function NoticeBoardDetail({ data = noticeDetail }) {
  return (
    <>
      <PageHeaderWrapper>
        <BreadCrumbCustom
          links={[
            { label: "Home", to: "/" },
            { label: "Forum", to: "/forum" },
          ]}
          pageTitle="Noticeboard"
        />
        <Box className="flex gap-2">
          <Button LinkComponent={RouterLink} to="edit" variant="contained">
            Edit
          </Button>
        </Box>
      </PageHeaderWrapper>
      <Card elevation={0} className="border border-gray-200">
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
            <div>
              Expires on: <strong>{data.expiryDate}</strong>
            </div>
            <div>
              Visible to: <strong>{data.visibleTo}</strong>
            </div>
            <div>
              Approved by: <strong>{data.approvedBy}</strong>
            </div>
            <div>
              Approved on: <strong>{data.approvedOn}</strong>
            </div>
            <div>
              Posted on: <strong>{data.postedOn}</strong>
            </div>
          </div>
          <div className="mb-4">
            <Typography variant="h6" className="font-bold">
              {data.title}
            </Typography>
          </div>

          <Typography variant="subtitle1" className="mb-4">
            Dear {data.recipient},
          </Typography>

          <Typography variant="body1" className="mb-2 text-gray-800">
            {data.body}
          </Typography>

          <Typography variant="body1" className="mb-2 text-gray-800">
            {data.followUp}
          </Typography>

          <Typography variant="body2" className="text-gray-600 mb-6">
            If you’ve already made the payment, kindly ignore this message or
            share the transaction details.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {data.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`attachment-${idx}`}
                className="rounded shadow-md"
              />
            ))}
          </div>

          <Divider className="my-6" />

          <div className="mt-6 text-sm text-gray-700">
            <p>Regards,</p>
            <p>
              <strong>{data.senderName}</strong>
            </p>
            <p>{data.senderTitle}</p>
            <div className="flex items-center gap-2 mt-2">
              <Phone fontSize="small" /> {data.phone}
            </div>
            <div className="flex items-center gap-2">
              <Email fontSize="small" /> {data.email}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
