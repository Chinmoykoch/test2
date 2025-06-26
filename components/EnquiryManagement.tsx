"use client";
import React, { useState } from "react";
import { useEnquiries, Enquiry, UpdateEnquiryStatusData } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FaEdit, FaTrash, FaEye, FaChartBar } from "react-icons/fa";
import { format } from "date-fns";

const EnquiryManagement = () => {
  const { enquiries, loading, error, updateEnquiryStatus, deleteEnquiry, getEnquiryStats } = useEnquiries();
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [isStatsDialogOpen, setIsStatsDialogOpen] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const [statusData, setStatusData] = useState<UpdateEnquiryStatusData>({
    status: 'new',
    notes: ''
  });

  const handleStatusUpdate = async (id: string) => {
    try {
      await updateEnquiryStatus(id, statusData);
      setIsStatusDialogOpen(false);
      setSelectedEnquiry(null);
      setStatusData({ status: 'new', notes: '' });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      await deleteEnquiry(id);
    }
  };

  const handleViewStats = async () => {
    try {
      const statsData = await getEnquiryStats();
      setStats(statsData);
      setIsStatsDialogOpen(true);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'enrolled': return 'bg-green-100 text-green-800';
      case 'not-interested': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Enquiry Management</h1>
        <div className="flex gap-3">
          <Button onClick={handleViewStats} className="bg-blue-500 hover:bg-blue-600">
            <FaChartBar className="mr-2" />
            View Statistics
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enquiries.map((enquiry) => (
          <Card key={enquiry._id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{enquiry.name}</CardTitle>
                  <p className="text-sm text-gray-600">{enquiry.email}</p>
                </div>
                <Badge className={getStatusBadgeColor(enquiry.status)}>
                  {enquiry.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> {enquiry.phoneNumber}</p>
                <p><strong>City:</strong> {enquiry.city}</p>
                <p><strong>Course:</strong> {enquiry.course}</p>
                <p><strong>Date:</strong> {format(new Date(enquiry.createdAt), 'MMM dd, yyyy')}</p>
                {enquiry.source && <p><strong>Source:</strong> {enquiry.source}</p>}
              </div>
              
              <div className="flex gap-2 mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FaEye className="mr-1" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Enquiry Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold">Name</h3>
                          <p>{enquiry.name}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p>{enquiry.email}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p>{enquiry.phoneNumber}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">City</h3>
                          <p>{enquiry.city}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Course</h3>
                          <p>{enquiry.course}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Status</h3>
                          <Badge className={getStatusBadgeColor(enquiry.status)}>
                            {enquiry.status}
                          </Badge>
                        </div>
                      </div>
                      {enquiry.message && (
                        <div>
                          <h3 className="font-semibold">Message</h3>
                          <p>{enquiry.message}</p>
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold">Submitted</h3>
                        <p>{format(new Date(enquiry.createdAt), 'PPP')}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedEnquiry(enquiry);
                    setStatusData({ status: enquiry.status, notes: '' });
                    setIsStatusDialogOpen(true);
                  }}
                  className="flex-1"
                >
                  <FaEdit className="mr-1" />
                  Update Status
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(enquiry._id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <FaTrash className="mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Update Status Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Enquiry Status</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Select
                value={statusData.status}
                onValueChange={(value: any) => setStatusData({ ...statusData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="enrolled">Enrolled</SelectItem>
                  <SelectItem value="not-interested">Not Interested</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (Optional)
              </label>
              <Textarea
                value={statusData.notes}
                onChange={(e) => setStatusData({ ...statusData, notes: e.target.value })}
                placeholder="Add any notes about this enquiry..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                onClick={() => selectedEnquiry && handleStatusUpdate(selectedEnquiry._id)}
                className="flex-1 bg-amber-500 hover:bg-amber-600"
              >
                Update Status
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsStatusDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Statistics Dialog */}
      <Dialog open={isStatsDialogOpen} onOpenChange={setIsStatsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Enquiry Statistics</DialogTitle>
          </DialogHeader>
          
          {stats && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-sm text-gray-600">Total Enquiries</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
                  <div className="text-sm text-gray-600">New</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
                  <div className="text-sm text-gray-600">Contacted</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.enrolled}</div>
                  <div className="text-sm text-gray-600">Enrolled</div>
                </div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{stats.notInterested}</div>
                <div className="text-sm text-gray-600">Not Interested</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnquiryManagement; 